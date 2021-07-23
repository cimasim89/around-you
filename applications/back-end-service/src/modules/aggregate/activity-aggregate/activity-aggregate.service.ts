import { Injectable } from '@nestjs/common'
import { DeviceEventDelta } from '../../../database/default/models/device-event-delta.entity'
import { ActivityService } from '../../activity/activity.service'
import { DeviceEventDeltaService } from '../../deviceeventdelta/device-event-delta.service'
import { DeviceEventDeltaFilterDto } from '../../deviceeventdelta/dto/device-event-delta-filter.dto'
import { DeviceMovementsService } from '../../devicemovements/device-movements.service'
import { AreaAggregate } from '../area-aggregate/area-aggregate.model'
import { AreaAggregateService } from '../area-aggregate/area-aggregate.service'
import { ActivityCountFilter } from './dto/activity-count-filter.dto'

@Injectable()
export class ActivityAggregateService {
  constructor(
    private activityService: ActivityService,
    private deviceMovementsService: DeviceMovementsService,
    private deltaService: DeviceEventDeltaService,
    private areaAggregateService: AreaAggregateService
  ) {}

  async getActivityCount(activityUuid: string, activityCountFilterDto: ActivityCountFilter): Promise<number> {
    const movements = await this.getActivityMovements(activityUuid, activityCountFilterDto)

    return movements.reduce<number>((acc, item) => acc + item.delta, 0)
  }

  async getActivityMovements(
    activityUuid: string,
    activityCountFilterDto: ActivityCountFilter
  ): Promise<DeviceEventDelta[]> {
    const { areaUuid } = await this.activityService.getActivity(activityUuid)

    const areaTree = await this.areaAggregateService.getTree(areaUuid)

    return await this.getTreeMovements(areaTree, activityCountFilterDto)
  }

  async getTreeMovements(
    areaAggregate: AreaAggregate,
    activityCountFilterDto: ActivityCountFilter
  ): Promise<DeviceEventDelta[]> {
    const { children, uuid } = areaAggregate

    const areaDeltas = await this.getSingleAreaDeltas(uuid, activityCountFilterDto)

    const areaTreeDeltas = await Promise.all(
      children.map(areaChild => this.getTreeMovements(areaChild, activityCountFilterDto))
    )

    return [...areaTreeDeltas.reduce((acc, deltas) => [...acc, ...deltas], []), ...areaDeltas]
  }

  async getSingleAreaDeltas(areaUuid: string, activityCountFilterDto: ActivityCountFilter) {
    const devices = await this.deviceMovementsService.getCurrentBindValidDevices(areaUuid)

    const areaMovements = await Promise.all(
      devices.map(device =>
        this.deltaService.getDeviceEventDeltas({
          deviceUuid: device.deviceUuid,
          from: activityCountFilterDto.from,
          to: activityCountFilterDto.to,
        })
      )
    )

    return areaMovements.reduce((acc, deltas) => [...acc, ...deltas], [])
  }
}

import { EntityRepository, Repository } from 'typeorm'
import { DeviceEventDelta } from '../../database/default/models/device-event-delta.entity'
import { DeviceEventDeltaFilterDto } from './dto/device-event-delta-filter.dto'

@EntityRepository(DeviceEventDelta)
export class DeviceEventDeltaRepository extends Repository<DeviceEventDelta> {
  async getDeltas(deviceEventDeltaFilterDto: DeviceEventDeltaFilterDto): Promise<DeviceEventDelta[]> {
    const { deviceUuid, from, to } = deviceEventDeltaFilterDto
    const queryBuilder = this.createQueryBuilder('event-delta')
    queryBuilder.andWhere('event-delta.deviceUuid = :deviceUuid', { deviceUuid })
    if (from) {
      queryBuilder.andWhere('event-delta.dateTime > :fromDateTime', { fromDateTime: from })
    }
    if (to) {
      queryBuilder.andWhere('event-delta.dateTime < :toDateTime', { toDateTime: to })
    }
    return queryBuilder.getMany()
  }
}

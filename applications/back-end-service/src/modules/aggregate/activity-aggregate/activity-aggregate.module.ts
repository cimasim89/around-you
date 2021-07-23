import { Module } from '@nestjs/common'
import { ActivityModule } from '../../activity/activity.module'
import { DeviceEventDeltaModule } from '../../deviceeventdelta/device-event-delta.module'
import { DeviceMovementsModule } from '../../devicemovements/device-movements.module'
import { AreaAggregateModule } from '../area-aggregate/area-aggregate.module'
import { ActivityAggregateController } from './activity-aggregate.controller'
import { ActivityAggregateService } from './activity-aggregate.service'

@Module({
  imports: [ActivityModule, DeviceMovementsModule, DeviceEventDeltaModule, AreaAggregateModule],
  controllers: [ActivityAggregateController],
  providers: [ActivityAggregateService],
})
export class ActivityAggregateModule {}

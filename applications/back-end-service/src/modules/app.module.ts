import { Module } from '@nestjs/common'
import { DefaultDatabaseModule } from '../database/default.database.module'
import { ActivityModule } from './activity/activity.module'
import { ActivityAggregateModule } from './aggregate/activity-aggregate/activity-aggregate.module'
import { AreaAggregateModule } from './aggregate/area-aggregate/area-aggregate.module'
import { AreaModule } from './area/area.module'
import { DeviceModule } from './device/device.module'
import { DeviceMovementsModule } from './devicemovements/device-movements.module'

@Module({
  imports: [
    DefaultDatabaseModule,
    ActivityModule,
    AreaModule,
    DeviceMovementsModule,
    DeviceModule,
    AreaAggregateModule,
    ActivityAggregateModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

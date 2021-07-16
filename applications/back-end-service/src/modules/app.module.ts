import { Module } from '@nestjs/common'
import { DefaultDatabaseModule } from '../database/default.database.module'
import { ActivityModule } from './activity/activity.module'
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
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

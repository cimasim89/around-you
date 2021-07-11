import { Module } from '@nestjs/common'
import { DefaultDatabaseModule } from '../database/default.database.module'
import { ActivityModule } from './activity/activity.module'
import { AreaModule } from './area/area.module'
import { DeviceMovementsModule } from './devicemovements/device-movements.module'
import { DeviceModule } from './device/device.module';
import { DeviceModule } from './device/device.module';

@Module({
  imports: [DefaultDatabaseModule, ActivityModule, AreaModule, DeviceMovementsModule, DeviceModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

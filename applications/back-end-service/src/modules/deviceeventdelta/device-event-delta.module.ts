import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DeviceEventDeltaController } from './device-event-delta.controller'
import { DeviceEventDeltaRepository } from './device-event-delta.repository'
import { DeviceEventDeltaService } from './device-event-delta.service'

@Module({
  imports: [TypeOrmModule.forFeature([DeviceEventDeltaRepository])],
  controllers: [DeviceEventDeltaController],
  providers: [DeviceEventDeltaService],
})
export class DeviceEventDeltaModule {}

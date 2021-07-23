import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DeviceMovementsController } from './device-movements.controller'
import { DeviceMovementsRepository } from './device-movements.repository'
import { DeviceMovementsService } from './device-movements.service'

@Module({
  imports: [TypeOrmModule.forFeature([DeviceMovementsRepository])],
  controllers: [DeviceMovementsController],
  providers: [DeviceMovementsService],
  exports: [DeviceMovementsService],
})
export class DeviceMovementsModule {}

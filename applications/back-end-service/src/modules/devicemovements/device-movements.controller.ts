import { Controller, Get, Param } from '@nestjs/common'
import { DeviceMovementsService } from './device-movements.service'

@Controller('device-movements')
export class DeviceMovementsController {
  constructor(private deviceMovementsService: DeviceMovementsService) {}

  //@Get('/:deviceUuid')
  //getCurrentBindArea(@Param('deviceUuid') deviceUuid: string) {
  //  return this.deviceMovementsService.getCurrentBindArea(deviceUuid)
  //}

  @Get('/:areaUuid')
  getCurrentBindValidDevices(@Param('areaUuid') areaUuid: string) {
    return this.deviceMovementsService.getCurrentBindValidDevices(areaUuid)
  }
}

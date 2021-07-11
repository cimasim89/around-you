import { Body, Controller, Get } from '@nestjs/common'
import { DeviceEventDeltaService } from './device-event-delta.service'
import { DeviceEventDeltaFilterDto } from './dto/device-event-delta-filter.dto'

@Controller('device-event-delta')
export class DeviceEventDeltaController {
  constructor(private deviceEventDeltaService: DeviceEventDeltaService) {}

  @Get()
  getDeviceEventDelta(@Body() deviceEventDeltaFilterDto: DeviceEventDeltaFilterDto) {
    return this.deviceEventDeltaService.getDeviceEventDeltas(deviceEventDeltaFilterDto)
  }
}

import { Injectable } from '@nestjs/common'
import { DeviceEventDelta } from '../../database/default/models/device-event-delta.entity'
import { DeviceEventDeltaRepository } from './device-event-delta.repository'
import { DeviceEventDeltaFilterDto } from './dto/device-event-delta-filter.dto'

@Injectable()
export class DeviceEventDeltaService {
  constructor(private deviceEventDeltaRepository: DeviceEventDeltaRepository) {}

  async getDeviceEventDeltas(deviceEventDeltaFilterDto: DeviceEventDeltaFilterDto): Promise<DeviceEventDelta[]> {
    return await this.deviceEventDeltaRepository.getDeltas(deviceEventDeltaFilterDto)
  }
}

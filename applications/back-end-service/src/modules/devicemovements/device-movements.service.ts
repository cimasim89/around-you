import { Injectable } from '@nestjs/common'
import { In } from 'typeorm'
import { DeviceMovements } from '../../database/default/models/device-movements.entity'
import { MovementTypeEnum } from '../../database/default/models/device-movements.enum'
import { DeviceMovementsRepository } from './device-movements.repository'

@Injectable()
export class DeviceMovementsService {
  constructor(private deviceMovementsRepository: DeviceMovementsRepository) {}

  async getCurrentBindDevices(areaUuid: string): Promise<DeviceMovements[]> {
    return await this.deviceMovementsRepository.find({ areaUuid, movementType: MovementTypeEnum.FirstInstall })
  }

  async getCurrentBindValidDevices(areaUuid: string): Promise<DeviceMovements[]> {
    const binds = await this.getCurrentBindDevices(areaUuid)

    const devicesHistory = await this.deviceMovementsRepository.find({
      deviceUuid: In([...binds.map(b => b.deviceUuid)]),
      movementType: MovementTypeEnum.FirstInstall,
    })

    return binds.filter(async bind => {
      const history = devicesHistory.filter(d => d.deviceUuid === bind.deviceUuid)
      return (
        bind.dateTime >
        history.sort((a, b) => {
          return a.dateTime.getTime() - b.dateTime.getTime()
        })[0].dateTime
      )
    })
  }

  async getCurrentBindArea(deviceUuid: string): Promise<DeviceMovements[]> {
    return await this.deviceMovementsRepository.find({ deviceUuid })
  }
}

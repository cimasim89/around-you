import { EntityRepository, Repository } from 'typeorm'
import { DeviceMovements } from '../../database/default/models/device-movements.entity'

@EntityRepository(DeviceMovements)
export class DeviceMovementsRepository extends Repository<DeviceMovements> {}

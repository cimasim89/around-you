import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { MovementTypeEnum } from './device-movements.enum'
import { Device } from './device.entity'

@Entity()
export class DeviceMovements {
  @Column()
  areaUuid: string

  @Column()
  dateTime: Date

  @Column()
  deviceUuid: string

  @Column()
  movementType: MovementTypeEnum

  @PrimaryGeneratedColumn('uuid')
  uuid: string

  @ManyToOne(() => Device, device => device.movements, { onDelete: 'NO ACTION', onUpdate: 'CASCADE' })
  @JoinColumn({ name: 'deviceUuid' })
  device!: Device
}

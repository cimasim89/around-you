import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { DeviceEventDelta } from './device-event-delta.entity'
import { DeviceMovements } from './device-movements.entity'

@Entity()
export class Device {
  @Column('character varying')
  identifier!: string

  @PrimaryGeneratedColumn('uuid')
  uuid!: string

  @OneToMany(() => DeviceEventDelta, deviceEventDelta => deviceEventDelta.device)
  eventDeltas: DeviceEventDelta[]

  @OneToMany(() => DeviceMovements, deviceMovement => deviceMovement.device)
  movements: DeviceMovements[]
}

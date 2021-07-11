import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from 'typeorm'
import {Device} from "./device.entity";

@Entity()
export class DeviceEventDelta {
  @Column({
    type: 'timestamp with time zone',
  })
  dateTime!: Date

  @Column('string')
  deviceUuid!: string

  @Column('int')
  delta!: number

  @PrimaryGeneratedColumn('uuid')
  uuid: string

  @ManyToOne(() => Device, device => device.eventDeltas, { onDelete: 'NO ACTION', onUpdate: 'CASCADE' })
  @JoinColumn({ name: 'deviceUuid' })
  device!: Device
}

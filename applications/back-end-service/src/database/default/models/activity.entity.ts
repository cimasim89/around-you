import { PrimaryGeneratedColumn, Column, Entity, ManyToOne, JoinColumn } from 'typeorm'
import { Area } from './area.entity'

@Entity({ name: 'activity' })
export abstract class Activity {
  @Column()
  active: boolean

  @Column()
  address: string

  @Column()
  areaUuid: string

  @Column({
    type: 'int2',
  })
  closing: number

  @Column({
    type: 'double precision',
  })
  latitude: number

  @Column({
    type: 'double precision',
  })
  longitude: number

  @Column()
  name: string

  @Column({
    type: 'int2',
  })
  opening: number

  @PrimaryGeneratedColumn('uuid')
  uuid!: string

  @ManyToOne(() => Area, area => area.activities, { onDelete: 'NO ACTION', onUpdate: 'CASCADE' })
  @JoinColumn({ name: 'areaUuid' })
  area: Area
}

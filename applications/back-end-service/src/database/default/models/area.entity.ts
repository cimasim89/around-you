import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Activity } from './activity.entity'

@Entity()
export class Area {
  @Column({
    nullable: true,
  })
  parentAreaUuid?: string

  @Column()
  name!: string

  @PrimaryGeneratedColumn('uuid')
  uuid!: string

  @OneToMany(() => Activity, activity => activity.areaUuid)
  activities: Activity[]
}

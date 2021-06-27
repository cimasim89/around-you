import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm'

@Entity({ name: 'activity' })
export abstract class Activity {
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
}

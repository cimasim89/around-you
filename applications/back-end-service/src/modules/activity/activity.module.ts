import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ActivityController } from './activity.controller'
import { ActivityRepository } from './activity.repository'
import { ActivityService } from './activity.service'

@Module({
  imports: [TypeOrmModule.forFeature([ActivityRepository])],
  controllers: [ActivityController],
  providers: [ActivityService],
})
export class ActivityModule {}

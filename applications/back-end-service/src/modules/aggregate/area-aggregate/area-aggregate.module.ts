import { Module } from '@nestjs/common'
import { AreaModule } from '../../area/area.module'
import { AreaAggregateController } from './area-aggregate.controller'
import { AreaAggregateService } from './area-aggregate.service'

@Module({
  imports: [AreaModule],
  providers: [AreaAggregateService],
  controllers: [AreaAggregateController],
})
export class AreaAggregateModule {}

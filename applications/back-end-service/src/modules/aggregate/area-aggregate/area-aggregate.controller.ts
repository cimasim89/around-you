import { Controller, Get, Param } from '@nestjs/common'
import { AreaAggregateService } from './area-aggregate.service'

@Controller('area-aggregate')
export class AreaAggregateController {
  constructor(private areaAggregateService: AreaAggregateService) {}

  @Get('/:areaUuid')
  getAreaSubTree(@Param('areaUuid') areaUuid: string) {
    return this.areaAggregateService.getTree(areaUuid)
  }
}

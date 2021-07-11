import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { Area } from '../../database/default/models/area.entity'
import { AreaService } from './area.service'
import { CreateAreaDTO } from './dto/create-area.dto'

@Controller('area')
export class AreaController {
  constructor(private areaService: AreaService) {}

  @Get('/:areaUuid')
  getArea(@Param('areaUuid') areaUuid: string): Promise<Area> {
    return this.areaService.getAreas(areaUuid)
  }

  @Post()
  createArea(@Body() createAreaDTO: CreateAreaDTO) {
    return this.areaService.createArea(createAreaDTO)
  }
}

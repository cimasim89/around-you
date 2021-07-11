import { Body, Controller, Get, Param, Post, Query, ValidationPipe } from '@nestjs/common'
import { ActivityService } from './activity.service'
import { CreateActivityDTO } from './dto/create-activity.dto'
import { FilterActivityDTO } from './dto/filter-activity.dto'

@Controller('activity')
export class ActivityController {
  constructor(private activityService: ActivityService) {}

  @Get('/:id')
  getActivity(@Param('id') id: string) {
    return this.activityService.getActivity(id)
  }

  @Get()
  getActivities(@Query(ValidationPipe) filterActivityDTO: FilterActivityDTO) {
    return this.activityService.getActivities(filterActivityDTO)
  }

  // Solo in fase di test
  @Post()
  createActivity(@Body() createActivityDTO: CreateActivityDTO) {
    return this.activityService.createActivity(createActivityDTO)
  }
}

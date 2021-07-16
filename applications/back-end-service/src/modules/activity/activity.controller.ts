import {
  Body,
  Controller,
  Get,
  InternalServerErrorException,
  NotFoundException,
  Param,
  Post,
  Query,
  ValidationPipe,
} from '@nestjs/common'
import { ActivityService } from './activity.service'
import { CreateActivityDTO } from './dto/create-activity.dto'
import { FilterActivityDTO } from './dto/filter-activity.dto'
import { ActivityNotFoundException } from './exceptions/activity-not-found.exception'

@Controller('activity')
export class ActivityController {
  constructor(private activityService: ActivityService) {}

  @Get('/:id')
  async getActivity(@Param('id') id: string) {
    try {
      return await this.activityService.getActivity(id)
    } catch (error) {
      if (error instanceof ActivityNotFoundException) {
        throw new NotFoundException(error.message)
      }
      throw new InternalServerErrorException(error.message)
    }
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

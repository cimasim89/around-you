import { Injectable } from '@nestjs/common'
import { Activity } from '../../database/default/models/activity.entity'
import { ActivityRepository } from './activity.repository'
import { CreateActivityDTO } from './dto/create-activity.dto'
import { FilterActivityDTO } from './dto/filter-activity.dto'
import { ActivityNotFoundException } from './exceptions/activity-not-found.exception'

@Injectable()
export class ActivityService {
  constructor(private activityRepository: ActivityRepository) {}

  async getActivity(uuid: string): Promise<Activity> {
    const activity = await this.activityRepository.findOne({ uuid })

    if (!activity) {
      throw new ActivityNotFoundException('Attività non trovata')
    }

    return activity
  }

  async getActivities(filterActivityDTO: FilterActivityDTO): Promise<Activity[]> {
    return this.activityRepository.find({ active: true })
  }

  async createActivity(createActivityDTO: CreateActivityDTO): Promise<Activity> {
    return this.activityRepository.save({
      active: true,
      address: createActivityDTO.address,
      areaUuid: createActivityDTO.areaUuid,
      closing: createActivityDTO.closing,
      latitude: createActivityDTO.latitude,
      longitude: createActivityDTO.longitude,
      name: createActivityDTO.name,
      opening: createActivityDTO.opening,
    })
  }
}

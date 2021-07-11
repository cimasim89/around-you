import { Injectable, NotFoundException } from '@nestjs/common'
import { Activity } from '../../database/default/models/activity.entity'
import { ActivityRepository } from './activity.repository'
import { CreateActivityDTO } from './dto/create-activity.dto'
import { FilterActivityDTO } from './dto/filter-activity.dto'

@Injectable()
export class ActivityService {
  constructor(private activityRepository: ActivityRepository) {}

  async getActivity(uuid: string): Promise<Activity> {
    const activity = await this.activityRepository.findOne({ uuid })

    if (!activity) {
      throw new NotFoundException('Attività non trovata')
    }

    return activity
  }

  async getActivities(filterActivityDTO: FilterActivityDTO): Promise<Activity[]> {
    const activities = await this.activityRepository.find({ active: true })

    return activities
  }

  async createActivity(createActivityDTO: CreateActivityDTO): Promise<Activity> {
    const activity = this.activityRepository.create({
      active: true,
      address: createActivityDTO.address,
      areaUuid: createActivityDTO.areaUuid,
      closing: createActivityDTO.closing,
      latitude: createActivityDTO.latitude,
      longitude: createActivityDTO.longitude,
      name: createActivityDTO.name,
      opening: createActivityDTO.opening,
    })

    return await this.activityRepository.save(activity)
  }
}

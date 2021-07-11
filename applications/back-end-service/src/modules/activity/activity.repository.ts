import { EntityRepository, Repository } from 'typeorm'
import { Activity } from '../../database/default/models/activity.entity'

@EntityRepository(Activity)
export class ActivityRepository extends Repository<Activity> {}

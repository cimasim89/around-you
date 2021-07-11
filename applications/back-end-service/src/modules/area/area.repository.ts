import { EntityRepository, Repository } from 'typeorm'
import { Area } from '../../database/default/models/area.entity'

@EntityRepository(Area)
export class AreaRepository extends Repository<Area> {}

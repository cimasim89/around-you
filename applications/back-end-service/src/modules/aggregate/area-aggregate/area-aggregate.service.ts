import { Injectable } from '@nestjs/common'
import { AreaService } from '../../area/area.service'
import { AreaAggregate } from './area-aggregate.model'

@Injectable()
export class AreaAggregateService {
  constructor(private areaService: AreaService) {}

  async getTree(areaUuid: string): Promise<AreaAggregate> {
    const area = await this.areaService.getArea(areaUuid)

    const childAreas = await this.areaService.getChildren(area.uuid)

    const children = await Promise.all(childAreas.map(area => this.getTree(area.uuid)))

    return new AreaAggregate(area.uuid, area.name, area.parentAreaUuid, children)
  }
}

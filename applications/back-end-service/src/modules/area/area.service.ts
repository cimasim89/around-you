import { Injectable, NotFoundException } from '@nestjs/common'
import { Area } from '../../database/default/models/area.entity'
import { AreaRepository } from './area.repository'
import { CreateAreaDTO } from './dto/create-area.dto'

@Injectable()
export class AreaService {
  constructor(private areaRepository: AreaRepository) {}

  async getArea(uuid: string): Promise<Area> {
    const area = await this.areaRepository.findOne({ uuid })

    if (!area) {
      throw new NotFoundException('Area non trovata')
    }

    return area
  }

  async createArea(createAreaDTO: CreateAreaDTO): Promise<Area> {
    return await this.areaRepository.save({
      parentAreaUuid: createAreaDTO.parentAreaUuid,
      name: createAreaDTO.name,
    })
  }

  getChildren(areaUuid: string): Promise<Area[]> {
    return this.areaRepository.find({ parentAreaUuid: areaUuid })
  }
}

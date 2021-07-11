import { IsOptional, IsNumber } from 'class-validator'

export class FilterActivityDTO {
  @IsNumber()
  @IsOptional()
  latitudeEnd?: number

  @IsNumber()
  @IsOptional()
  latitudeStart?: number

  @IsNumber()
  @IsOptional()
  longitudeEnd?: number

  @IsNumber()
  @IsOptional()
  longitudeStart?: number

  @IsNumber()
  @IsOptional()
  @IsOptional()
  address?: string
}

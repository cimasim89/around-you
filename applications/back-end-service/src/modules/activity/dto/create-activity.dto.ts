import { IsLatitude, IsLongitude, IsNotEmpty, IsNumber, IsString, IsUUID } from 'class-validator'

export class CreateActivityDTO {
  @IsUUID()
  @IsNotEmpty()
  areaUuid!: string

  @IsString()
  @IsNotEmpty()
  address!: string

  @IsNumber()
  @IsNotEmpty()
  closing!: number

  @IsLatitude()
  @IsNotEmpty()
  latitude!: number

  @IsLongitude()
  @IsNotEmpty()
  longitude!: number

  @IsString()
  @IsNotEmpty()
  name!: string

  @IsNumber()
  @IsNotEmpty()
  opening!: number
}

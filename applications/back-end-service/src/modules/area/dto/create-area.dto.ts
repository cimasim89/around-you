import { IsNotEmpty, IsNumber, IsOptional, IsString, IsUUID } from 'class-validator'

export class CreateAreaDTO {
  @IsString()
  @IsOptional()
  parentAreaUuid?: string

  @IsString()
  @IsNotEmpty()
  name!: string
}

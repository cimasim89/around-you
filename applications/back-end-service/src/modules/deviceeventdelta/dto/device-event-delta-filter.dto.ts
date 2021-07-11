import { IsDate, IsNotEmpty, IsOptional, IsString } from 'class-validator'

export class DeviceEventDeltaFilterDto {
  @IsNotEmpty()
  @IsString()
  deviceUuid?: string

  @IsOptional()
  @IsDate()
  from?: Date

  @IsOptional()
  @IsDate()
  to?: Date
}

import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { typeOrmDefaultDatabaseConfig } from '../config/database/typeorm.default.config'

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmDefaultDatabaseConfig)],
})
export class DefaultDatabaseModule {}

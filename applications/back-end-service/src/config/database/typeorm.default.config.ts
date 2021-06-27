import * as path from 'path'
import { TypeOrmModuleOptions } from '@nestjs/typeorm'
import * as config from 'config'

type TypeormTypeType = 'postgres' | 'sqlite' | 'mssql' | 'mysql'

type DefaultDatabaseConfigType = {
  type: TypeormTypeType
  host: string
  port: number
  username: string
  password: string
  database: string
  synchronize: boolean
}

const defaultDatabaseConfig = config.get<DefaultDatabaseConfigType>('db.default')

export const typeOrmDefaultDatabaseConfig: TypeOrmModuleOptions = {
  name: 'default',
  type: (process.env.DEFAULT_DB_TYPE ? process.env.DEFAULT_DB_TYPE : defaultDatabaseConfig.type) as TypeormTypeType,
  host: process.env.DEFAULT_DB_HOST || defaultDatabaseConfig.host,
  port: process.env.DEFAULT_DB_PORT ? parseInt(process.env.DEFAULT_DB_PORT) : defaultDatabaseConfig.port,
  username: process.env.DEFAULT_DB_USERNAME || defaultDatabaseConfig.username,
  password: process.env.DEFAULT_DB_PASSWORD || defaultDatabaseConfig.password,
  database: process.env.DEFAULT_DB_DATABASE || defaultDatabaseConfig.database,
  synchronize: defaultDatabaseConfig.synchronize || false,

  entities: [path.join(__dirname, '../../database/default/**/*.entity.ts')],
  migrations: [path.join(__dirname, '../../database/default/migrations/*.ts')],
  migrationsTableName: 'migration',

  cli: {
    migrationsDir: 'src/database/default/migrations',
  },
}

import * as fs from 'fs'
import { typeOrmDefaultDatabaseConfig } from '../../config/database/typeorm.default.config'

const ormConfigArray = [typeOrmDefaultDatabaseConfig]

fs.writeFileSync('ormconfig.json', JSON.stringify(ormConfigArray, null, 2))

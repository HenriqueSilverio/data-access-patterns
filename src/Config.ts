import env from 'require-env'

const Config = {
  ServiceName: env.require('SERVICE_NAME'),
  SQLiteDBPath: env.require('SQLITE_DB_PATH'),
}

export default Config

const Config = Object.freeze({
  SQLiteDBPath: process.env.SQLITE_DB_PATH ?? ':memory:',
})

export default Config

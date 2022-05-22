import Database from 'better-sqlite3'

import Config from './Config'

const DB = new Database(Config.SQLiteDBPath)

const setup = DB.prepare(`
  CREATE TABLE IF NOT EXISTS books (
    id TEXT NOT NULL,
    isbn TEXT NOT NULL,
    title TEXT NOT NULL,
    author TEXT NOT NULL
  )
`)

setup.run()

const seed = DB.prepare(`
  INSERT INTO books (id, isbn, title, author)
  VALUES (
    'a7512c9e-0338-49b7-8f57-0738c0846f49',
    '0321127420',
    'Patterns of Enterprise Application Architecture',
    'Martin Fowler'
  ), (
    'ada9094a-c9c0-44c7-88e2-3732444db0c9',
    '0321125215',
    'Domain-Driven Design',
    'Eric Evans'
  )
`)

seed.run()

export default DB

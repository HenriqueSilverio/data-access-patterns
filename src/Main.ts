import { randomUUID } from 'crypto'

import BookFinder from './RowDataGateway/BookFinder'
import BookGateway, { BookGatewayProps } from './RowDataGateway/BookGateway'

const start = () => {
  const finder = new BookFinder()

  let library = finder.findAll()

  console.log(':: finder.findAll() ::::')

  console.log(library.map((book) => JSON.parse(book.toString()) as BookGatewayProps))

  const uuid = randomUUID()

  const book02 = new BookGateway({
    id: uuid,
    isbn: '0201544350',
    title: 'Object Oriented Software Engineering',
    author: 'Ivar Jacobson',
  })

  book02.insert()

  console.log(':: finder.findByID() ::::')

  const maybeFound = finder.findByID(uuid)

  console.log(JSON.parse(maybeFound.toString()))

  console.log(':: finder.findAll() ::::')

  library = finder.findAll()

  console.log(library.map((book) => JSON.parse(book.toString()) as BookGatewayProps))
}

start()

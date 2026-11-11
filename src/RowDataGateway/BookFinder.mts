import DB from '../DB.mts'
import type IFinder from './IFinder.mts'
import BookGateway, { type BookGatewayProps } from './BookGateway.mts'

export default class BookFinder implements IFinder {
  private readonly findByIDStatementString = `
    SELECT id, isbn, title, author
    FROM books
    WHERE id = $bookID
  `

  private readonly findAllStatementString = `
    SELECT id, isbn, title, author
    FROM books
  `

  public findByID(id: string): BookGateway {
    const statement = DB.prepare(this.findByIDStatementString)

    const row = statement.get({
      bookID: id,
    }) as unknown as BookGateway

    return new BookGateway({
      id: row.id,
      isbn: row.isbn,
      title: row.title,
      author: row.author,
    })
  }

  public findAll(): BookGateway[] {
    const statement = DB.prepare(this.findAllStatementString)

    const rows = statement.all() as unknown as BookGatewayProps[]

    const books = rows.map(row => new BookGateway({
      id: row.id,
      isbn: row.isbn,
      title: row.title,
      author: row.author,
    }))

    return books
  }
}

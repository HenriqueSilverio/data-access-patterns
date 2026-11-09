import Book, { type BookProps } from './Book.mts'
import AbstractMapper from './AbstractMapper.mts'

export default class BookMapper extends AbstractMapper<Book> {
  private static readonly tableName = 'books'

  private static readonly tableColums = 'id, isbn, title, author'

  protected statementFindByID = `
    SELECT ${BookMapper.tableColums}
    FROM ${BookMapper.tableName}
    WHERE id = ?
  `

  public findByID(id: string): Book | null {
    return this.abstractFindByID(id)
  }

  protected load(id: string, resultSet: BookProps): Book {
    return Book.create({
      id,
      isbn: resultSet.isbn,
      title: resultSet.title,
      author: resultSet.author,
    })
  }
}

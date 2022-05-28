import Book, { BookProps } from './Book'
import AbstractMapper from './AbstractMapper'

export default class BookMapper extends AbstractMapper<Book> {
  protected statementFindByID = `
    SELECT ${BookMapper.tableColums}
    FROM ${BookMapper.tableName}
    WHERE id = ?
  `

  private static readonly tableName = 'books'

  private static readonly tableColums = 'id, isbn, title, author'

  public findByID(id: string): Book | null {
    return this.abstractFindByID(id)
  }

  // eslint-disable-next-line class-methods-use-this
  protected load(id: string, resultSet: BookProps): Book {
    return Book.create({
      id,
      isbn: resultSet.isbn,
      title: resultSet.title,
      author: resultSet.author,
    })
  }
}

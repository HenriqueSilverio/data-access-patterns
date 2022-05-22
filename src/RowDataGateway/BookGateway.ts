import DB from '../DB'

import IGateway from './IGateway'

export interface BookGatewayProps {
  id: string,
  isbn: string,
  title: string,
  author: string,
}

export default class BookGateway implements IGateway {
  private props: BookGatewayProps

  constructor(props: BookGatewayProps) {
    this.props = { ...props }
  }

  public get id() : string {
    return this.props.id
  }

  public get isbn() : string {
    return this.props.isbn
  }

  public get title() : string {
    return this.props.title
  }

  public get author() : string {
    return this.props.author
  }

  public toString(): string {
    return JSON.stringify(this.props)
  }

  private readonly insertStatementString = `
    INSERT INTO books (id, title, isbn, author)
    VALUES ($id, $title, $isbn, $author)
  `

  public insert(): void {
    const statement = DB.prepare(this.insertStatementString)

    const result = statement.run({
      id: this.id,
      title: this.title,
      isbn: this.isbn,
      author: this.author,
    })

    if (result.changes < 1) {
      throw new Error('Failed to INSERT')
    }
  }
}

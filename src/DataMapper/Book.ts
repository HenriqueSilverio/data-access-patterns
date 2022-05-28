export interface BookProps {
  id: string,
  isbn: string,
  title: string,
  author: string,
}

export default class Book {
  private props: BookProps

  private constructor(props: BookProps) {
    this.props = { ...props }
  }

  public static create(props: BookProps): Book {
    return new Book(props)
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
}

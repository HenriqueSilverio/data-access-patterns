import DB from '../DB'

export interface Map<T> {
  [index: string]: T
}

export interface ResultSet {
  id: string,
}

export default abstract class AbstractMapper<T> {
  protected identityMap: Map<T> = {}

  protected abstract readonly statementFindByID: string

  protected abstractFindByID(id: string): T | null {
    let result = this.identityMap[id] || null

    if (result) {
      return result
    }

    const preparedStatement = DB.prepare(this.statementFindByID)

    const resultSet = preparedStatement.get(id) as ResultSet

    if (!resultSet) {
      return result
    }

    result = this.abstractLoad(resultSet)

    return result
  }

  protected abstractLoad(resultSet: ResultSet): T | null {
    const { id } = resultSet

    let result = this.identityMap[id] || null

    if (result) {
      return result
    }

    result = this.load(id, resultSet)

    this.identityMap[id] = result

    return result
  }

  protected abstract load(id: string, resultSet: unknown): T
}

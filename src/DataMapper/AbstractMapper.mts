import DB from '../DB.mts'

export type Map<T> = Record<string, T>

export interface ResultSet {
  id: string
}

export default abstract class AbstractMapper<T extends object> {
  protected identityMap: Map<T> = {}

  protected abstract readonly statementFindByID: string

  protected abstractFindByID(id: string): T | null {
    let result = this.identityMap[id] ?? null

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

  protected abstractLoad(resultSet: ResultSet): T {
    const { id } = resultSet

    const result = this.identityMap[id]

    if (result) {
      return result
    }

    const loaded = this.load(id, resultSet)

    this.identityMap[id] = loaded

    return loaded
  }

  protected abstract load(id: string, resultSet: unknown): T
}

/**
 * @todo Remove this file once @types/node ships the new names.
 * @see https://github.com/DefinitelyTyped/DefinitelyTyped/discussions/75867
 */
declare module 'node:sqlite' {
  const Database: typeof DatabaseSync
  type Database = DatabaseSync
  const Statement: typeof StatementSync
  type Statement = StatementSync
}

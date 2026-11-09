export default interface IGateway {
  insert(): void | Promise<void>
}

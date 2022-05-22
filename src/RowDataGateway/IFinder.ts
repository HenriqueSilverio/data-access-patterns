import IGateway from './IGateway'

export default interface IFinder {
  findByID(id: string): IGateway | Promise<IGateway>
  findAll(): Array<IGateway> | Promise<Array<IGateway>>
}

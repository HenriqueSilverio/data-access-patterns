import type IGateway from './IGateway.mts'

export default interface IFinder {
  findByID(id: string): IGateway | Promise<IGateway>
  findAll(): IGateway[] | Promise<IGateway[]>
}

export interface RepositoryInterface<T> {
  create(entity: T): Promise<void>
  findAll(): Promise<T[]>
}
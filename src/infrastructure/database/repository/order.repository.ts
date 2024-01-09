import { InjectRepository } from "@nestjs/typeorm";
import Order from "../../../domain/order/entity/order.entity";
import { OrderRepositoryInterface } from "../../../domain/order/repository/order.repository.interface";
import { Repository } from "typeorm";

export default class OrderRepository implements OrderRepositoryInterface {

  constructor(
    @InjectRepository(Order)
    private readonly order: Repository<Order>) { }

  async findAll(): Promise<Order[]> {
    return await this.order.find()
  }

  async create(entity: Order): Promise<any> {
    return await this.order.save(entity)
  }

}
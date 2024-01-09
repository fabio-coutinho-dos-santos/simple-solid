import { Inject, Injectable } from "@nestjs/common";
import OrderDto from "../dto/order.dto";
import Order from "../entity/order.entity";
import OrderRepository from "../../../infrastructure/database/repository/order.repository";

@Injectable()
export default class OrdersService {
  
  constructor(
    @Inject('OrderRepositoryInterface')
    private readonly ordersRepository: OrderRepository
  ){}

  async createOrder(orderDto: OrderDto) {
    const order = new Order();
    order.client = orderDto.client
    order.date = orderDto.date
    return this.ordersRepository.create(order)
  }

  async findAll() {
    return this.ordersRepository.findAll()
  }
}
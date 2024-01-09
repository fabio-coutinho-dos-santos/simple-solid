import { Body, Controller, Get, Post } from "@nestjs/common";
import OrderDto from "../dto/order.dto";
import OrdersService from "../service/order.service";

@Controller('/orders')
export class OrdersController {
  constructor(private readonly orderService: OrdersService){}
  
  @Post()
  async createOrder(@Body() orderDto: OrderDto) {
    return await this.orderService.createOrder(orderDto);
  }

  @Get()
  async findAll() {
    return await this.orderService.findAll()
  }
}
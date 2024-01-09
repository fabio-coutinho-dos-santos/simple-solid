import { Module } from "@nestjs/common";
import OrderService from "./service/order.service";
import { OrdersController } from "./controller/order.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import Order from "./entity/order.entity";
import OrderRepository from "../../frameworks/database/repository/order.repository";

@Module({
  imports:[TypeOrmModule.forFeature([Order])],
  providers:[
    {
      provide: 'OrderRepositoryInterface',
      useClass: OrderRepository
    },
    OrderService,
  ],
  controllers: [OrdersController]
})

export class OrderModule {}
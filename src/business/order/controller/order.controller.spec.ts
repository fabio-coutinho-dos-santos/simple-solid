import { Test, TestingModule } from "@nestjs/testing";
import { OrdersController } from "./order.controller"
import OrdersService from "../service/order.service";
import OrderDto from "../dto/order.dto";
import OrderRepository from "../../../frameworks/database/repository/order.repository";
import Order from "../entity/order.entity";
import { TypeOrmModule } from "@nestjs/typeorm";

describe('Orders Controller', () => {

  let ordersController: OrdersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRootAsync({
          useFactory: async () => {
            return {
              type: 'sqlite',
              database: ':memory',
              entities: [Order],
              synchronize: true,
              logging: false,
              migrations: [`${__dirname}/**/migrations/*.{ts,js}`],
            }
          }
        }),
        TypeOrmModule.forFeature([Order])
      ],
      controllers: [OrdersController],
      providers: [
        OrdersService,
        {
          provide: 'OrderRepositoryInterface',
          useClass: OrderRepository
        }
      ]
    }).compile()

    ordersController = module.get<OrdersController>(OrdersController)
  })

  describe('create order', () => {
    it('shold return a new order', async () => {
      const orderDtoStub: OrderDto = {
        client: "User1",
        date: new Date()
      }

      const response = await ordersController.createOrder(orderDtoStub)
      expect(response.id).toBeDefined();
      expect(response.client).toBe(orderDtoStub.client);
      expect(response.date).toBe(orderDtoStub.date);
    })
  })

  describe('find all', () => {
    it('shold return an orders array', async () => {
      const response = await ordersController.findAll()
      expect(response).toBeInstanceOf(Array)
    })
  })
})
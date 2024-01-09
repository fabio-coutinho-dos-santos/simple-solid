import Order from "../../../domain/order/entity/order.entity";

export function ormconfig(): any {
  return {
    type: 'sqlite',
    database: ':memory',
    entities: [Order],
    synchronize: true,
    logging: false,
    migrations: [`${__dirname}/**/migrations/*.{ts,js}`],
  }
}
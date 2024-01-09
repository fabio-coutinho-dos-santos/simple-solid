import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('orders')
export default class Order {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  client: string

  @Column()
  date: Date
}
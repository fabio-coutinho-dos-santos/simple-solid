import { Module } from "@nestjs/common";
import { TypeOrmModule } from '@nestjs/typeorm';
import { ormconfig } from "./ormconfig";

@Module({
  imports:[
    TypeOrmModule.forRootAsync({
      useFactory: async() => ormconfig()
    }),
  ],
})

export class DatabaseModule {}
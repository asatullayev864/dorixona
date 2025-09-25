import { Module } from '@nestjs/common';
import { MedicineTypeModule } from './medicine-type/medicine-type.module';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { MedicineType } from './medicine-type/models/medicine-type.model';
import { MedicinesModule } from './medicines/medicines.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true
    }),
    SequelizeModule.forRoot({
      dialect: "postgres",
      host: process.env.PG_HOST,
      port: Number(process.env.PG_PORT),
      username: process.env.PG_USER,
      password: process.env.PG_PASSWORD,
      database: process.env.PG_DATABASE,
      models: [MedicineType],
      autoLoadModels: true,
      logging: false,
      sync: { alter: true },
    }),
    MedicineTypeModule,
    MedicinesModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

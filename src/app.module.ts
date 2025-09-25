import { Module } from '@nestjs/common';
import { MedicineTypeModule } from './medicine-type/medicine-type.module';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { MedicineType } from './medicine-type/models/medicine-type.model';
import { MedicinesModule } from './medicines/medicines.module';
import { Medicine } from './medicines/models/medicine.model';
import { RegionModule } from './region/region.module';
import { Region } from './region/models/region.model';
import { DistrictModule } from './district/district.module';
import { District } from './district/models/district.model';

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
      models: [MedicineType, Medicine, Region, District],
      autoLoadModels: true,
      logging: false,
      sync: { alter: true },
    }),
    MedicineTypeModule,
    MedicinesModule,
    RegionModule,
    DistrictModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }

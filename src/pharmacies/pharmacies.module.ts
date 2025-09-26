import { Module } from '@nestjs/common';
import { PharmaciesService } from './pharmacies.service';
import { PharmaciesController } from './pharmacies.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Region } from '../region/models/region.model';
import { District } from '../district/models/district.model';
import { Stock } from '../stock/models/stock.model';
import { Pharmacy } from './models/pharmacy.model';

@Module({
  imports: [SequelizeModule.forFeature([Pharmacy, Region, District, Stock])],
  controllers: [PharmaciesController],
  providers: [PharmaciesService],
})
export class PharmaciesModule {}

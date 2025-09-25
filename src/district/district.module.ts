import { Module } from '@nestjs/common';
import { DistrictService } from './district.service';
import { DistrictController } from './district.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Region } from '../region/models/region.model';
import { District } from './models/district.model';

@Module({
  imports: [SequelizeModule.forFeature([Region, District])],
  controllers: [DistrictController],
  providers: [DistrictService],
})
export class DistrictModule { }

import { Module } from '@nestjs/common';
import { MedicinesService } from './medicines.service';
import { MedicinesController } from './medicines.controller';
import { Medicine } from './models/medicine.model';
import { MedicineType } from '../medicine-type/models/medicine-type.model';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([Medicine, MedicineType])],
  controllers: [MedicinesController],
  providers: [MedicinesService],
})
export class MedicinesModule {}

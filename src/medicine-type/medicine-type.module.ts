import { Module } from '@nestjs/common';
import { MedicineTypeService } from './medicine-type.service';
import { MedicineTypeController } from './medicine-type.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { MedicineType } from './models/medicine-type.model';
import { Medicine } from '../medicines/models/medicine.model';

@Module({
  imports: [SequelizeModule.forFeature([MedicineType, Medicine])],
  controllers: [MedicineTypeController],
  providers: [MedicineTypeService],
})
export class MedicineTypeModule {}

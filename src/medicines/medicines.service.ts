import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateMedicineDto } from './dto/create-medicine.dto';
import { UpdateMedicineDto } from './dto/update-medicine.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Medicine } from './models/medicine.model';
import { MedicineType } from '../medicine-type/models/medicine-type.model';

@Injectable()
export class MedicinesService {
  constructor(
    @InjectModel(Medicine) private readonly medicineModel: typeof Medicine,
    @InjectModel(MedicineType) private readonly medicineTypeModel: typeof MedicineType,
  ) { }

  async create(createMedicineDto: CreateMedicineDto) {
    const { name, manufacture, medicine_type_id, price, expiry_date, info } = createMedicineDto;
    if (!name || !manufacture || !medicine_type_id || !price || !expiry_date) {
      throw new BadRequestException("Please enter the full information❗️");
    }

    const medicineType = await this.medicineTypeModel.findByPk(medicine_type_id)
    if (!medicineType) {
      throw new NotFoundException("Bunday medicineType mavjud emas")
    }

    return await this.medicineModel.create(createMedicineDto);
  }

  async findAll() {
    return await this.medicineModel.findAll({ include: { all: true }, order: [["id", "ASC"]] });
  }

  async findOne(id: number) {
    const medicine = await this.medicineModel.findOne({
      where: { id },
      include: { all: true },
      order: [["id", "ASC"]]
    });
    if (!medicine) {
      throw new NotFoundException(`Medicine with ID ${id} not found`);
    }
    return medicine;
  }

  async update(id: number, updateMedicineDto: UpdateMedicineDto) {
    const medicine = await this.findOne(id);
    return await medicine.update(updateMedicineDto);
  }

  async remove(id: number) {
    const medicine = await this.findOne(id);
    await medicine.destroy();
    return { message: `Medicine with ID ${id} deleted successfully` };
  }
}
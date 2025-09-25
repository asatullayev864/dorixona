import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMedicineTypeDto } from './dto/create-medicine-type.dto';
import { UpdateMedicineTypeDto } from './dto/update-medicine-type.dto';
import { InjectModel } from '@nestjs/sequelize';
import { MedicineType } from './models/medicine-type.model';

@Injectable()
export class MedicineTypeService {
  constructor(
    @InjectModel(MedicineType) private readonly medicineTypeModel: typeof MedicineType,
  ) { }

  async create(createMedicineTypeDto: CreateMedicineTypeDto) {
    const { name } = createMedicineTypeDto;
    if (!name) {
      throw new NotFoundException("Nameni kiriting!!!");
    }
    return await this.medicineTypeModel.create(createMedicineTypeDto);
  }

  async findAll() {
    return await this.medicineTypeModel.findAll();
  }

  async findOne(id: number) {
    const medicineType = await this.medicineTypeModel.findByPk(id);
    if (!medicineType) {
      throw new NotFoundException(`MedicineType with ID ${id} not found`);
    }
    return medicineType;
  }

  async update(id: number, updateMedicineTypeDto: UpdateMedicineTypeDto) {
    const medicineType = await this.findOne(id);
    return await medicineType.update(updateMedicineTypeDto);
  }

  async remove(id: number) {
    const medicineType = await this.findOne(id);
    await medicineType.destroy();
    return { message: `MedicineType with ID ${id} removed successfully` };
  }
}
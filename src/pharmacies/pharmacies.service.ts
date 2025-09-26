import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreatePharmacyDto } from './dto/create-pharmacy.dto';
import { UpdatePharmacyDto } from './dto/update-pharmacy.dto';

import { Pharmacy } from './models/pharmacy.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class PharmaciesService {

  constructor(
    @InjectModel(Pharmacy) private readonly pharmaciesModel: typeof Pharmacy,
  ) { }

  async create(createPharmacyDto: CreatePharmacyDto): Promise<Pharmacy> {
    const { name, address, location, phone, email, regionId, districtId } = createPharmacyDto;
    if (!name || !address || !location || !phone || !email || !regionId || !districtId) {
      throw new NotFoundException("Iltimos ma'lumotlarni toliq kiriting‼️");
    }
    const existsEmail = await this.pharmaciesModel.findOne({
      where: { email: createPharmacyDto.email }
    });

    if (existsEmail) {
      throw new BadRequestException("Bunday email avvaldan mavjud‼️");
    }

    const existsPhone = await this.pharmaciesModel.findByPk(phone);
    if (existsPhone) {
      throw new BadRequestException("Bunday tel raqami mavjud‼️");
    }

    return await this.pharmaciesModel.create(createPharmacyDto);
  }

  async findAll(): Promise<Pharmacy[]> {
    return await this.pharmaciesModel.findAll({ include: { all: true } });
  }

  async findOne(id: number): Promise<Pharmacy | null> {
    return await this.pharmaciesModel.findByPk(id, { include: { all: true } });
  }

  async update(id: number, updatePharmacyDto: UpdatePharmacyDto) {
    const { name, address, location, phone, email, regionId, districtId } = updatePharmacyDto;

    if (email) {
      const existsEmail = await this.pharmaciesModel.findOne({ where: { email } });
      if (existsEmail && existsEmail.id !== id) {
        throw new BadRequestException("Iltimos boshqa email kiriting❗️");
      }
    }

    if (phone) {
      const existsPhone = await this.pharmaciesModel.findOne({ where: { phone } });
      if (existsPhone && existsPhone.id !== id) {
        throw new BadRequestException("Iltimos boshqa tel raqam kiriting❗️");
      }
    }

    return await this.pharmaciesModel.update(updatePharmacyDto, {
      where: { id: id },
      returning: true
    });
  }

  async remove(id: number): Promise<{ message: string }> {
    const pharmacy = await this.pharmaciesModel.findByPk(id);
    if (!pharmacy) {
      throw new NotFoundException("Bunday dorixona topilmadi❗️");
    }

    await pharmacy.destroy();
    return { message: "Dorixona muvaffaqiyatli o'chirildi ✅" };
  }
}

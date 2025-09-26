import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { District } from './models/district.model';
import { CreateDistrictDto } from './dto/create-district.dto';
import { UpdateDistrictDto } from './dto/update-district.dto';
import { Region } from '../region/models/region.model';

@Injectable()
export class DistrictService {
  constructor(
    @InjectModel(District) private readonly districtModel: typeof District,
  ) { }

  async create(createDistrictDto: CreateDistrictDto) {
    const { name, region_id } = createDistrictDto;
    if (!name) {
      throw new NotFoundException('District name kiriting!');
    }

    if (!region_id) {
      throw new NotFoundException('Districtga region_id kiriting!');
    }
    return await this.districtModel.create(createDistrictDto);
  }

  async findAll() {
    return await this.districtModel.findAll({ include: { all: true }, order: [["id", "ASC"]] });
  }

  async findOne(id: number) {
    const district = await this.districtModel.findOne({
      where: { id },
      include: { all: true },
      order: [["id", "ASC"]]
    });

    if (!district) {
      throw new NotFoundException(`District with ID ${id} not found`);
    }
    return district;
  }

  async update(id: number, updateDistrictDto: UpdateDistrictDto) {
    const district = await this.findOne(id);
    return await district.update(updateDistrictDto);
  }

  async remove(id: number) {
    const district = await this.findOne(id);
    await district.destroy();
    return { message: `District with ID ${id} removed successfully` };
  }
}
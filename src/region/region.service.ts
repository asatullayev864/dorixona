import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Region } from './models/region.model';
import { CreateRegionDto } from './dto/create-region.dto';
import { UpdateRegionDto } from './dto/update-region.dto';

@Injectable()
export class RegionService {
  constructor(
    @InjectModel(Region) private readonly regionModel: typeof Region,
  ) { }

  async create(createRegionDto: CreateRegionDto) {
    const { name } = createRegionDto;
    if (!name) {
      throw new NotFoundException("Region name kiriting!!!");
    }
    return await this.regionModel.create(createRegionDto);
  }

  async findAll() {
    return await this.regionModel.findAll({ include: { all: true }, order: [["id", "ASC"]] });
  }

  async findOne(id: number) {
    const region = await this.regionModel.findOne({
      where: { id },
      include: { all: true },
      order: [["id", "ASC"]]
    });
    if (!region) {
      throw new NotFoundException(`Region with ID ${id} not found`);
    }
    return region;
  }

  async update(id: number, updateRegionDto: UpdateRegionDto) {
    const region = await this.findOne(id);
    return await this.regionModel.update(updateRegionDto,{
        where: { id },
        returning: true
      }
    );
  }

  async remove(id: number) {
    const region = await this.regionModel.findOne({where: {id}});
    if (!region) {
      throw new NotFoundException("Unable to find information in such ID");
    }
    await this.regionModel;
    return { message: `Region with ID ${id} removed successfully` };
  }
}
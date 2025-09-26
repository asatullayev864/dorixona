import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateStockDto } from './dto/create-stock.dto';
import { UpdateStockDto } from './dto/update-stock.dto';
import { Stock } from './models/stock.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class StockService {
  constructor(
    @InjectModel(Stock) private readonly stockModel: typeof Stock
  ) { }
  async create(createStockDto: CreateStockDto) {
    const { pharmacyId, medicineId, quantity } = createStockDto;
    if (!pharmacyId || !medicineId || !quantity) {
      throw new BadRequestException("Iltimos ma'lumotlarni toliq kiriting");
    }
    return await this.stockModel.create(createStockDto);
  }

  async findAll() {
    return await this.stockModel.findAll({ include: { all: true }, order: [["id", "ASC"]] });
  }

  async findOne(id: number) {
    const stock = await this.stockModel.findOne({
      where: { id },
      include: { all: true },
      order: [["id", "ASC"]]
    });
    if (!stock) {
      throw new NotFoundException("Bunday ID da Stock topilmadi❌");
    }
    return stock
  }

  async update(id: number, updateStockDto: UpdateStockDto) {
    const stock = await this.stockModel.findOne({ where: { id } });
    if (!stock) {
      throw new NotFoundException("Bunday ID da Stock topilmadi❌");
    }
    
    return await this.stockModel.update(updateStockDto, {
      where: { id },
      returning: true
    });
  }

  async remove(id: number) {
    const stock = await this.stockModel.destroy({ where: { id } });
    if (!stock) {
      throw new NotFoundException("Bunday ID da Stock topilmadi❌");
    }
    return {
      message: "Stock muvaffaqiyatli o'chirildi✅",
      id
    };
  }
}

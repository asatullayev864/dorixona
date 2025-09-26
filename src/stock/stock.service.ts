import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateStockDto } from './dto/create-stock.dto';
import { UpdateStockDto } from './dto/update-stock.dto';

@Injectable()
export class StockService {
  create(createStockDto: CreateStockDto) {
    const { pharmacyId, medicineId, quantity } = createStockDto;
    if (!pharmacyId || !medicineId || !quantity) {
      throw new BadRequestException("Iltimos ma'lumotlarni toliq kiriting");
    }

    
  }

  findAll() {
    return `This action returns all stock`;
  }

  findOne(id: number) {
    return `This action returns a #${id} stock`;
  }

  update(id: number, updateStockDto: UpdateStockDto) {
    return `This action updates a #${id} stock`;
  }

  remove(id: number) {
    return `This action removes a #${id} stock`;
  }
}

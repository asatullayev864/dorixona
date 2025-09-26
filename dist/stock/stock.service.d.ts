import { CreateStockDto } from './dto/create-stock.dto';
import { UpdateStockDto } from './dto/update-stock.dto';
import { Stock } from './models/stock.model';
export declare class StockService {
    private readonly stockModel;
    constructor(stockModel: typeof Stock);
    create(createStockDto: CreateStockDto): Promise<Stock>;
    findAll(): Promise<Stock[]>;
    findOne(id: number): Promise<Stock>;
    update(id: number, updateStockDto: UpdateStockDto): Promise<[affectedCount: number, affectedRows: Stock[]]>;
    remove(id: number): Promise<{
        message: string;
        id: number;
    }>;
}

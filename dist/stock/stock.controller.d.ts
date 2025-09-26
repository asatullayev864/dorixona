import { StockService } from './stock.service';
import { CreateStockDto } from './dto/create-stock.dto';
import { UpdateStockDto } from './dto/update-stock.dto';
export declare class StockController {
    private readonly stockService;
    constructor(stockService: StockService);
    create(createStockDto: CreateStockDto): Promise<import("./models/stock.model").Stock>;
    findAll(): Promise<import("./models/stock.model").Stock[]>;
    findOne(id: string): Promise<import("./models/stock.model").Stock>;
    update(id: string, updateStockDto: UpdateStockDto): Promise<[affectedCount: number, affectedRows: import("./models/stock.model").Stock[]]>;
    remove(id: string): Promise<{
        message: string;
        id: number;
    }>;
}

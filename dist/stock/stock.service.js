"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StockService = void 0;
const common_1 = require("@nestjs/common");
const stock_model_1 = require("./models/stock.model");
const sequelize_1 = require("@nestjs/sequelize");
let StockService = class StockService {
    stockModel;
    constructor(stockModel) {
        this.stockModel = stockModel;
    }
    async create(createStockDto) {
        const { pharmacyId, medicineId, quantity } = createStockDto;
        if (!pharmacyId || !medicineId || !quantity) {
            throw new common_1.BadRequestException("Iltimos ma'lumotlarni toliq kiriting");
        }
        return await this.stockModel.create(createStockDto);
    }
    async findAll() {
        return await this.stockModel.findAll({ include: { all: true }, order: [["id", "ASC"]] });
    }
    async findOne(id) {
        const stock = await this.stockModel.findOne({
            where: { id },
            include: { all: true },
            order: [["id", "ASC"]]
        });
        if (!stock) {
            throw new common_1.NotFoundException("Bunday ID da Stock topilmadi❌");
        }
        return stock;
    }
    async update(id, updateStockDto) {
        const stock = await this.stockModel.findOne({ where: { id } });
        if (!stock) {
            throw new common_1.NotFoundException("Bunday ID da Stock topilmadi❌");
        }
        return await this.stockModel.update(updateStockDto, {
            where: { id },
            returning: true
        });
    }
    async remove(id) {
        const stock = await this.stockModel.destroy({ where: { id } });
        if (!stock) {
            throw new common_1.NotFoundException("Bunday ID da Stock topilmadi❌");
        }
        return {
            message: "Stock muvaffaqiyatli o'chirildi✅",
            id
        };
    }
};
exports.StockService = StockService;
exports.StockService = StockService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(stock_model_1.Stock)),
    __metadata("design:paramtypes", [Object])
], StockService);
//# sourceMappingURL=stock.service.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StockModule = void 0;
const common_1 = require("@nestjs/common");
const stock_service_1 = require("./stock.service");
const stock_controller_1 = require("./stock.controller");
const sequelize_1 = require("@nestjs/sequelize");
const pharmacy_model_1 = require("../pharmacies/models/pharmacy.model");
const medicine_model_1 = require("../medicines/models/medicine.model");
const stock_model_1 = require("./models/stock.model");
let StockModule = class StockModule {
};
exports.StockModule = StockModule;
exports.StockModule = StockModule = __decorate([
    (0, common_1.Module)({
        imports: [sequelize_1.SequelizeModule.forFeature([stock_model_1.Stock, pharmacy_model_1.Pharmacy, medicine_model_1.Medicine])],
        controllers: [stock_controller_1.StockController],
        providers: [stock_service_1.StockService],
    })
], StockModule);
//# sourceMappingURL=stock.module.js.map
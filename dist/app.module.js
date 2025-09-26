"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const medicine_type_module_1 = require("./medicine-type/medicine-type.module");
const config_1 = require("@nestjs/config");
const sequelize_1 = require("@nestjs/sequelize");
const medicine_type_model_1 = require("./medicine-type/models/medicine-type.model");
const medicines_module_1 = require("./medicines/medicines.module");
const medicine_model_1 = require("./medicines/models/medicine.model");
const region_module_1 = require("./region/region.module");
const region_model_1 = require("./region/models/region.model");
const district_module_1 = require("./district/district.module");
const district_model_1 = require("./district/models/district.model");
const pharmacies_module_1 = require("./pharmacies/pharmacies.module");
const stock_module_1 = require("./stock/stock.module");
const stock_model_1 = require("./stock/models/stock.model");
const pharmacy_model_1 = require("./pharmacies/models/pharmacy.model");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                envFilePath: '.env',
                isGlobal: true
            }),
            sequelize_1.SequelizeModule.forRoot({
                dialect: "postgres",
                host: process.env.PG_HOST,
                port: Number(process.env.PG_PORT),
                username: process.env.PG_USER,
                password: process.env.PG_PASSWORD,
                database: process.env.PG_DATABASE,
                models: [medicine_type_model_1.MedicineType, medicine_model_1.Medicine, region_model_1.Region, district_model_1.District, pharmacy_model_1.Pharmacy, stock_model_1.Stock],
                autoLoadModels: true,
                logging: false,
                sync: { alter: true },
            }),
            medicine_type_module_1.MedicineTypeModule,
            medicines_module_1.MedicinesModule,
            region_module_1.RegionModule,
            district_module_1.DistrictModule,
            pharmacies_module_1.PharmaciesModule,
            stock_module_1.StockModule
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map
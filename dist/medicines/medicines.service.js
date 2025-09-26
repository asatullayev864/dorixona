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
exports.MedicinesService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const medicine_model_1 = require("./models/medicine.model");
const medicine_type_model_1 = require("../medicine-type/models/medicine-type.model");
let MedicinesService = class MedicinesService {
    medicineModel;
    medicineTypeModel;
    constructor(medicineModel, medicineTypeModel) {
        this.medicineModel = medicineModel;
        this.medicineTypeModel = medicineTypeModel;
    }
    async create(createMedicineDto) {
        const { name, manufacture, medicine_type_id, price, expiry_date, info } = createMedicineDto;
        if (!name || !manufacture || !medicine_type_id || !price || !expiry_date) {
            throw new common_1.BadRequestException("Please enter the full information❗️");
        }
        const medicineType = await this.medicineTypeModel.findByPk(medicine_type_id);
        if (!medicineType) {
            throw new common_1.NotFoundException("Bunday medicineType mavjud emas");
        }
        return await this.medicineModel.create(createMedicineDto);
    }
    async findAll() {
        return await this.medicineModel.findAll({ include: { all: true }, order: [["id", "ASC"]] });
    }
    async findOne(id) {
        const medicine = await this.medicineModel.findByPk(id, {
            include: { model: medicine_type_model_1.MedicineType },
        });
        if (!medicine) {
            throw new common_1.NotFoundException(`Medicine with ID ${id} not found`);
        }
        return medicine;
    }
    async update(id, updateMedicineDto) {
        const medicine = await this.findOne(id);
        return await medicine.update(updateMedicineDto);
    }
    async remove(id) {
        const medicine = await this.findOne(id);
        await medicine.destroy();
        return { message: `Medicine with ID ${id} deleted successfully` };
    }
};
exports.MedicinesService = MedicinesService;
exports.MedicinesService = MedicinesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(medicine_model_1.Medicine)),
    __param(1, (0, sequelize_1.InjectModel)(medicine_type_model_1.MedicineType)),
    __metadata("design:paramtypes", [Object, Object])
], MedicinesService);
//# sourceMappingURL=medicines.service.js.map
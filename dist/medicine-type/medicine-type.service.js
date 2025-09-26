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
exports.MedicineTypeService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const medicine_type_model_1 = require("./models/medicine-type.model");
let MedicineTypeService = class MedicineTypeService {
    medicineTypeModel;
    constructor(medicineTypeModel) {
        this.medicineTypeModel = medicineTypeModel;
    }
    async create(createMedicineTypeDto) {
        const { name } = createMedicineTypeDto;
        if (!name) {
            throw new common_1.NotFoundException("Nameni kiriting!!!");
        }
        return await this.medicineTypeModel.create(createMedicineTypeDto);
    }
    async findAll() {
        return await this.medicineTypeModel.findAll({ include: { all: true }, order: [["id", "ASC"]] });
    }
    async findOne(id) {
        const medicineType = await this.medicineTypeModel.findByPk(id);
        if (!medicineType) {
            throw new common_1.NotFoundException(`MedicineType with ID ${id} not found`);
        }
        return medicineType;
    }
    async update(id, updateMedicineTypeDto) {
        const medicineType = await this.findOne(id);
        return await medicineType.update(updateMedicineTypeDto);
    }
    async remove(id) {
        const medicineType = await this.findOne(id);
        await medicineType.destroy();
        return { message: `MedicineType with ID ${id} removed successfully` };
    }
};
exports.MedicineTypeService = MedicineTypeService;
exports.MedicineTypeService = MedicineTypeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(medicine_type_model_1.MedicineType)),
    __metadata("design:paramtypes", [Object])
], MedicineTypeService);
//# sourceMappingURL=medicine-type.service.js.map
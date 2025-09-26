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
exports.PharmaciesService = void 0;
const common_1 = require("@nestjs/common");
const pharmacy_model_1 = require("./models/pharmacy.model");
const sequelize_1 = require("@nestjs/sequelize");
let PharmaciesService = class PharmaciesService {
    pharmaciesModel;
    constructor(pharmaciesModel) {
        this.pharmaciesModel = pharmaciesModel;
    }
    async create(createPharmacyDto) {
        const { name, address, location, phone, email, regionId, districtId } = createPharmacyDto;
        if (!name || !address || !location || !phone || !email || !regionId || !districtId) {
            throw new common_1.NotFoundException("Iltimos ma'lumotlarni toliq kiriting‼️");
        }
        const existsEmail = await this.pharmaciesModel.findOne({
            where: { email: createPharmacyDto.email }
        });
        if (existsEmail) {
            throw new common_1.BadRequestException("Bunday email avvaldan mavjud‼️");
        }
        const existsPhone = await this.pharmaciesModel.findByPk(phone);
        if (existsPhone) {
            throw new common_1.BadRequestException("Bunday tel raqami mavjud‼️");
        }
        return await this.pharmaciesModel.create(createPharmacyDto);
    }
    async findAll() {
        return await this.pharmaciesModel.findAll({ include: { all: true } });
    }
    async findOne(id) {
        return await this.pharmaciesModel.findByPk(id, { include: { all: true } });
    }
    async update(id, updatePharmacyDto) {
        const { name, address, location, phone, email, regionId, districtId } = updatePharmacyDto;
        if (email) {
            const existsEmail = await this.pharmaciesModel.findOne({ where: { email } });
            if (existsEmail && existsEmail.id !== id) {
                throw new common_1.BadRequestException("Iltimos boshqa email kiriting❗️");
            }
        }
        if (phone) {
            const existsPhone = await this.pharmaciesModel.findOne({ where: { phone } });
            if (existsPhone && existsPhone.id !== id) {
                throw new common_1.BadRequestException("Iltimos boshqa tel raqam kiriting❗️");
            }
        }
        return await this.pharmaciesModel.update(updatePharmacyDto, {
            where: { id: id },
            returning: true
        });
    }
    async remove(id) {
        const pharmacy = await this.pharmaciesModel.destroy({ where: { id } });
        if (!pharmacy) {
            throw new common_1.NotFoundException("Bunday ID da Pharmacy topilmadi❌");
        }
        return {
            message: "Pharmacy muvaffaqiyatli o'chirildi✅",
            id
        };
    }
};
exports.PharmaciesService = PharmaciesService;
exports.PharmaciesService = PharmaciesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(pharmacy_model_1.Pharmacy)),
    __metadata("design:paramtypes", [Object])
], PharmaciesService);
//# sourceMappingURL=pharmacies.service.js.map
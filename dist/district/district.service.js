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
exports.DistrictService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const district_model_1 = require("./models/district.model");
const region_model_1 = require("../region/models/region.model");
let DistrictService = class DistrictService {
    districtModel;
    constructor(districtModel) {
        this.districtModel = districtModel;
    }
    async create(createDistrictDto) {
        const { name, region_id } = createDistrictDto;
        if (!name) {
            throw new common_1.NotFoundException('District name kiriting!');
        }
        if (!region_id) {
            throw new common_1.NotFoundException('Districtga region_id kiriting!');
        }
        return await this.districtModel.create(createDistrictDto);
    }
    async findAll() {
        return await this.districtModel.findAll({ include: { all: true }, order: [["id", "ASC"]] });
    }
    async findOne(id) {
        const district = await this.districtModel.findByPk(id, {
            include: [{ model: region_model_1.Region }],
        });
        if (!district) {
            throw new common_1.NotFoundException(`District with ID ${id} not found`);
        }
        return district;
    }
    async update(id, updateDistrictDto) {
        const district = await this.findOne(id);
        return await district.update(updateDistrictDto);
    }
    async remove(id) {
        const district = await this.findOne(id);
        await district.destroy();
        return { message: `District with ID ${id} removed successfully` };
    }
};
exports.DistrictService = DistrictService;
exports.DistrictService = DistrictService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(district_model_1.District)),
    __metadata("design:paramtypes", [Object])
], DistrictService);
//# sourceMappingURL=district.service.js.map
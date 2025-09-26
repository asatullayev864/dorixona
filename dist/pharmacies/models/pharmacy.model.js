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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pharmacy = void 0;
const region_model_1 = require("../../region/models/region.model");
const district_model_1 = require("../../district/models/district.model");
const medicine_model_1 = require("../../medicines/models/medicine.model");
const stock_model_1 = require("../../stock/models/stock.model");
const sequelize_typescript_1 = require("sequelize-typescript");
let Pharmacy = class Pharmacy extends sequelize_typescript_1.Model {
    medicine;
};
exports.Pharmacy = Pharmacy;
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    }),
    __metadata("design:type", Number)
], Pharmacy.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false
    }),
    __metadata("design:type", String)
], Pharmacy.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false
    }),
    __metadata("design:type", String)
], Pharmacy.prototype, "address", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false
    }),
    __metadata("design:type", String)
], Pharmacy.prototype, "location", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false
    }),
    __metadata("design:type", String)
], Pharmacy.prototype, "phone", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: true
    }),
    __metadata("design:type", String)
], Pharmacy.prototype, "email", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => region_model_1.Region),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false
    }),
    __metadata("design:type", Number)
], Pharmacy.prototype, "regionId", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => district_model_1.District),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false
    }),
    __metadata("design:type", Number)
], Pharmacy.prototype, "districtId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => region_model_1.Region),
    __metadata("design:type", region_model_1.Region)
], Pharmacy.prototype, "region", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => district_model_1.District),
    __metadata("design:type", district_model_1.District)
], Pharmacy.prototype, "district", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsToMany)(() => medicine_model_1.Medicine, () => stock_model_1.Stock),
    __metadata("design:type", Array)
], Pharmacy.prototype, "medicine", void 0);
exports.Pharmacy = Pharmacy = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: "pharmacy" })
], Pharmacy);
//# sourceMappingURL=pharmacy.model.js.map
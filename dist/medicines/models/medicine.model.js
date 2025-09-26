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
exports.Medicine = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const medicine_type_model_1 = require("../../medicine-type/models/medicine-type.model");
const pharmacy_model_1 = require("../../pharmacies/models/pharmacy.model");
const stock_model_1 = require("../../stock/models/stock.model");
let Medicine = class Medicine extends sequelize_typescript_1.Model {
    medicineType;
    pharmacy;
};
exports.Medicine = Medicine;
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    }),
    __metadata("design:type", Number)
], Medicine.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], Medicine.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], Medicine.prototype, "manufacture", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DECIMAL(10, 2),
        allowNull: false,
    }),
    __metadata("design:type", Number)
], Medicine.prototype, "price", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DATE,
        allowNull: false,
    }),
    __metadata("design:type", Date)
], Medicine.prototype, "expiry_date", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.TEXT,
    }),
    __metadata("design:type", String)
], Medicine.prototype, "info", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => medicine_type_model_1.MedicineType),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: true,
    }),
    __metadata("design:type", Number)
], Medicine.prototype, "medicine_type_id", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => medicine_type_model_1.MedicineType),
    __metadata("design:type", medicine_type_model_1.MedicineType)
], Medicine.prototype, "medicineType", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsToMany)(() => pharmacy_model_1.Pharmacy, () => stock_model_1.Stock),
    __metadata("design:type", Array)
], Medicine.prototype, "pharmacy", void 0);
exports.Medicine = Medicine = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: "medicine" })
], Medicine);
//# sourceMappingURL=medicine.model.js.map
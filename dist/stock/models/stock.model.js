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
exports.Stock = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const pharmacy_model_1 = require("../../pharmacies/models/pharmacy.model");
const medicine_model_1 = require("../../medicines/models/medicine.model");
let Stock = class Stock extends sequelize_typescript_1.Model {
};
exports.Stock = Stock;
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    }),
    __metadata("design:type", Number)
], Stock.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => pharmacy_model_1.Pharmacy),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false
    }),
    __metadata("design:type", Number)
], Stock.prototype, "pharmacyId", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => medicine_model_1.Medicine),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false
    }),
    __metadata("design:type", Number)
], Stock.prototype, "medicineId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
        defaultValue: 0
    }),
    __metadata("design:type", Number)
], Stock.prototype, "quantity", void 0);
exports.Stock = Stock = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: "stock" })
], Stock);
//# sourceMappingURL=stock.model.js.map
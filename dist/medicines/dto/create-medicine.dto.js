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
exports.CreateMedicineDto = void 0;
const class_validator_1 = require("class-validator");
class CreateMedicineDto {
    name;
    manufacture;
    medicine_type_id;
    price;
    expiry_date;
    info;
}
exports.CreateMedicineDto = CreateMedicineDto;
__decorate([
    (0, class_validator_1.IsString)({ message: "Medicine nomi string bo'lishi kerak" }),
    (0, class_validator_1.IsNotEmpty)({ message: "Medicine nomi bo'sh bo'lmasligi kerak" }),
    (0, class_validator_1.MinLength)(2, { message: "Medicine nomi kamida 2 ta belgidan iborat bo'lishi kerak" }),
    (0, class_validator_1.MaxLength)(100, { message: "Medicine nomi 100 ta belgidan oshmasligi kerak" }),
    __metadata("design:type", String)
], CreateMedicineDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: "Manufacture string bo'lishi kerak" }),
    (0, class_validator_1.IsNotEmpty)({ message: "Manufacture bo'sh bo'lmasligi kerak" }),
    (0, class_validator_1.MaxLength)(100, { message: "Manufacture 100 ta belgidan oshmasligi kerak" }),
    __metadata("design:type", String)
], CreateMedicineDto.prototype, "manufacture", void 0);
__decorate([
    (0, class_validator_1.IsNumber)({}, { message: "medicine_type_id raqam bo'lishi kerak" }),
    (0, class_validator_1.IsNotEmpty)({ message: "medicine_type_id bo'sh bo'lmasligi kerak" }),
    __metadata("design:type", Number)
], CreateMedicineDto.prototype, "medicine_type_id", void 0);
__decorate([
    (0, class_validator_1.IsNumber)({}, { message: "Price raqam bo'lishi kerak" }),
    (0, class_validator_1.IsNotEmpty)({ message: "Price bo'sh bo'lmasligi kerak" }),
    (0, class_validator_1.Min)(0, { message: "Price manfiy bo'lmasligi kerak" }),
    __metadata("design:type", Number)
], CreateMedicineDto.prototype, "price", void 0);
__decorate([
    (0, class_validator_1.IsDateString)({}, { message: "expiry_date YYYY-MM-DD formatida bo'lishi kerak" }),
    (0, class_validator_1.IsNotEmpty)({ message: "expiry_date bo'sh bo'lmasligi kerak" }),
    __metadata("design:type", Date)
], CreateMedicineDto.prototype, "expiry_date", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: "Info string bo'lishi kerak" }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MaxLength)(255, { message: "Info 255 ta belgidan oshmasligi kerak" }),
    __metadata("design:type", String)
], CreateMedicineDto.prototype, "info", void 0);
//# sourceMappingURL=create-medicine.dto.js.map
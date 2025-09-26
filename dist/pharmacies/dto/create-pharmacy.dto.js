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
exports.CreatePharmacyDto = void 0;
const class_validator_1 = require("class-validator");
class CreatePharmacyDto {
    name;
    address;
    location;
    phone;
    email;
    regionId;
    districtId;
}
exports.CreatePharmacyDto = CreatePharmacyDto;
__decorate([
    (0, class_validator_1.IsString)({ message: "Pharmacy nomi string bo'lishi kerak" }),
    (0, class_validator_1.IsNotEmpty)({ message: "Pharmacy nomi bo'sh bo'lmasligi kerak" }),
    (0, class_validator_1.MaxLength)(100, { message: "Pharmacy nomi 100 ta belgidan oshmasligi kerak" }),
    __metadata("design:type", String)
], CreatePharmacyDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: "Address string bo'lishi kerak" }),
    (0, class_validator_1.IsNotEmpty)({ message: "Address bo'sh bo'lmasligi kerak" }),
    (0, class_validator_1.MaxLength)(200, { message: "Address 200 ta belgidan oshmasligi kerak" }),
    __metadata("design:type", String)
], CreatePharmacyDto.prototype, "address", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: "Location string bo'lishi kerak" }),
    (0, class_validator_1.IsNotEmpty)({ message: "Location bo'sh bo'lmasligi kerak" }),
    (0, class_validator_1.MaxLength)(100, { message: "Location 100 ta belgidan oshmasligi kerak" }),
    __metadata("design:type", String)
], CreatePharmacyDto.prototype, "location", void 0);
__decorate([
    (0, class_validator_1.IsPhoneNumber)("UZ", { message: "Telefon raqami O'zbekiston formatida bo'lishi kerak" }),
    (0, class_validator_1.IsNotEmpty)({ message: "Telefon raqami bo'sh bo'lmasligi kerak" }),
    __metadata("design:type", String)
], CreatePharmacyDto.prototype, "phone", void 0);
__decorate([
    (0, class_validator_1.IsEmail)({}, { message: "Email noto'g'ri formatda" }),
    (0, class_validator_1.IsNotEmpty)({ message: "Email bo'sh bo'lmasligi kerak" }),
    __metadata("design:type", String)
], CreatePharmacyDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsInt)({ message: "regionId butun son bo'lishi kerak" }),
    (0, class_validator_1.IsNotEmpty)({ message: "regionId bo'sh bo'lmasligi kerak" }),
    __metadata("design:type", Number)
], CreatePharmacyDto.prototype, "regionId", void 0);
__decorate([
    (0, class_validator_1.IsInt)({ message: "districtId butun son bo'lishi kerak" }),
    (0, class_validator_1.IsNotEmpty)({ message: "districtId bo'sh bo'lmasligi kerak" }),
    __metadata("design:type", Number)
], CreatePharmacyDto.prototype, "districtId", void 0);
//# sourceMappingURL=create-pharmacy.dto.js.map
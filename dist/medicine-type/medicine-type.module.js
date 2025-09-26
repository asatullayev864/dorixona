"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MedicineTypeModule = void 0;
const common_1 = require("@nestjs/common");
const medicine_type_service_1 = require("./medicine-type.service");
const medicine_type_controller_1 = require("./medicine-type.controller");
const sequelize_1 = require("@nestjs/sequelize");
const medicine_type_model_1 = require("./models/medicine-type.model");
const medicine_model_1 = require("../medicines/models/medicine.model");
let MedicineTypeModule = class MedicineTypeModule {
};
exports.MedicineTypeModule = MedicineTypeModule;
exports.MedicineTypeModule = MedicineTypeModule = __decorate([
    (0, common_1.Module)({
        imports: [sequelize_1.SequelizeModule.forFeature([medicine_type_model_1.MedicineType, medicine_model_1.Medicine])],
        controllers: [medicine_type_controller_1.MedicineTypeController],
        providers: [medicine_type_service_1.MedicineTypeService],
    })
], MedicineTypeModule);
//# sourceMappingURL=medicine-type.module.js.map
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
exports.MedicineTypeController = void 0;
const common_1 = require("@nestjs/common");
const medicine_type_service_1 = require("./medicine-type.service");
const create_medicine_type_dto_1 = require("./dto/create-medicine-type.dto");
const update_medicine_type_dto_1 = require("./dto/update-medicine-type.dto");
let MedicineTypeController = class MedicineTypeController {
    medicineTypeService;
    constructor(medicineTypeService) {
        this.medicineTypeService = medicineTypeService;
    }
    create(createMedicineTypeDto) {
        return this.medicineTypeService.create(createMedicineTypeDto);
    }
    findAll() {
        return this.medicineTypeService.findAll();
    }
    findOne(id) {
        return this.medicineTypeService.findOne(+id);
    }
    update(id, updateMedicineTypeDto) {
        return this.medicineTypeService.update(+id, updateMedicineTypeDto);
    }
    remove(id) {
        return this.medicineTypeService.remove(+id);
    }
};
exports.MedicineTypeController = MedicineTypeController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_medicine_type_dto_1.CreateMedicineTypeDto]),
    __metadata("design:returntype", void 0)
], MedicineTypeController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MedicineTypeController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MedicineTypeController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_medicine_type_dto_1.UpdateMedicineTypeDto]),
    __metadata("design:returntype", void 0)
], MedicineTypeController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MedicineTypeController.prototype, "remove", null);
exports.MedicineTypeController = MedicineTypeController = __decorate([
    (0, common_1.Controller)('medicine-type'),
    __metadata("design:paramtypes", [medicine_type_service_1.MedicineTypeService])
], MedicineTypeController);
//# sourceMappingURL=medicine-type.controller.js.map
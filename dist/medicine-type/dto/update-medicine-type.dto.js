"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMedicineTypeDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_medicine_type_dto_1 = require("./create-medicine-type.dto");
class UpdateMedicineTypeDto extends (0, mapped_types_1.PartialType)(create_medicine_type_dto_1.CreateMedicineTypeDto) {
}
exports.UpdateMedicineTypeDto = UpdateMedicineTypeDto;
//# sourceMappingURL=update-medicine-type.dto.js.map
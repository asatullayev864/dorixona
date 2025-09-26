import { MedicineTypeService } from './medicine-type.service';
import { CreateMedicineTypeDto } from './dto/create-medicine-type.dto';
import { UpdateMedicineTypeDto } from './dto/update-medicine-type.dto';
export declare class MedicineTypeController {
    private readonly medicineTypeService;
    constructor(medicineTypeService: MedicineTypeService);
    create(createMedicineTypeDto: CreateMedicineTypeDto): Promise<import("./models/medicine-type.model").MedicineType>;
    findAll(): Promise<import("./models/medicine-type.model").MedicineType[]>;
    findOne(id: string): Promise<import("./models/medicine-type.model").MedicineType>;
    update(id: string, updateMedicineTypeDto: UpdateMedicineTypeDto): Promise<import("./models/medicine-type.model").MedicineType>;
    remove(id: string): Promise<{
        message: string;
    }>;
}

import { CreateMedicineTypeDto } from './dto/create-medicine-type.dto';
import { UpdateMedicineTypeDto } from './dto/update-medicine-type.dto';
import { MedicineType } from './models/medicine-type.model';
export declare class MedicineTypeService {
    private readonly medicineTypeModel;
    constructor(medicineTypeModel: typeof MedicineType);
    create(createMedicineTypeDto: CreateMedicineTypeDto): Promise<MedicineType>;
    findAll(): Promise<MedicineType[]>;
    findOne(id: number): Promise<MedicineType>;
    update(id: number, updateMedicineTypeDto: UpdateMedicineTypeDto): Promise<MedicineType>;
    remove(id: number): Promise<{
        message: string;
    }>;
}

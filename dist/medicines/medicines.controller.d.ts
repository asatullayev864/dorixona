import { MedicinesService } from './medicines.service';
import { CreateMedicineDto } from './dto/create-medicine.dto';
import { UpdateMedicineDto } from './dto/update-medicine.dto';
export declare class MedicinesController {
    private readonly medicinesService;
    constructor(medicinesService: MedicinesService);
    create(createMedicineDto: CreateMedicineDto): Promise<import("./models/medicine.model").Medicine>;
    findAll(): Promise<import("./models/medicine.model").Medicine[]>;
    findOne(id: string): Promise<import("./models/medicine.model").Medicine>;
    update(id: string, updateMedicineDto: UpdateMedicineDto): Promise<import("./models/medicine.model").Medicine>;
    remove(id: string): Promise<{
        message: string;
    }>;
}

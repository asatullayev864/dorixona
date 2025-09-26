import { CreateMedicineDto } from './dto/create-medicine.dto';
import { UpdateMedicineDto } from './dto/update-medicine.dto';
import { Medicine } from './models/medicine.model';
import { MedicineType } from '../medicine-type/models/medicine-type.model';
export declare class MedicinesService {
    private readonly medicineModel;
    private readonly medicineTypeModel;
    constructor(medicineModel: typeof Medicine, medicineTypeModel: typeof MedicineType);
    create(createMedicineDto: CreateMedicineDto): Promise<Medicine>;
    findAll(): Promise<Medicine[]>;
    findOne(id: number): Promise<Medicine>;
    update(id: number, updateMedicineDto: UpdateMedicineDto): Promise<Medicine>;
    remove(id: number): Promise<{
        message: string;
    }>;
}

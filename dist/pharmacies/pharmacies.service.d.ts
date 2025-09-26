import { CreatePharmacyDto } from './dto/create-pharmacy.dto';
import { UpdatePharmacyDto } from './dto/update-pharmacy.dto';
import { Pharmacy } from './models/pharmacy.model';
export declare class PharmaciesService {
    private readonly pharmaciesModel;
    constructor(pharmaciesModel: typeof Pharmacy);
    create(createPharmacyDto: CreatePharmacyDto): Promise<Pharmacy>;
    findAll(): Promise<Pharmacy[]>;
    findOne(id: number): Promise<Pharmacy | null>;
    update(id: number, updatePharmacyDto: UpdatePharmacyDto): Promise<[affectedCount: number, affectedRows: Pharmacy[]]>;
    remove(id: number): Promise<{
        message: string;
        id: number;
    }>;
}

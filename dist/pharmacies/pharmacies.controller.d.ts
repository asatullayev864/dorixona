import { PharmaciesService } from './pharmacies.service';
import { CreatePharmacyDto } from './dto/create-pharmacy.dto';
import { UpdatePharmacyDto } from './dto/update-pharmacy.dto';
export declare class PharmaciesController {
    private readonly pharmaciesService;
    constructor(pharmaciesService: PharmaciesService);
    create(createPharmacyDto: CreatePharmacyDto): Promise<import("./models/pharmacy.model").Pharmacy>;
    findAll(): Promise<import("./models/pharmacy.model").Pharmacy[]>;
    findOne(id: string): Promise<import("./models/pharmacy.model").Pharmacy | null>;
    update(id: string, updatePharmacyDto: UpdatePharmacyDto): Promise<[affectedCount: number, affectedRows: import("./models/pharmacy.model").Pharmacy[]]>;
    remove(id: string): Promise<{
        message: string;
        id: number;
    }>;
}

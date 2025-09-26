import { Region } from './models/region.model';
import { CreateRegionDto } from './dto/create-region.dto';
import { UpdateRegionDto } from './dto/update-region.dto';
export declare class RegionService {
    private readonly regionModel;
    constructor(regionModel: typeof Region);
    create(createRegionDto: CreateRegionDto): Promise<Region>;
    findAll(): Promise<Region[]>;
    findOne(id: number): Promise<Region>;
    update(id: number, updateRegionDto: UpdateRegionDto): Promise<[affectedCount: number, affectedRows: Region[]]>;
    remove(id: number): Promise<{
        message: string;
    }>;
}

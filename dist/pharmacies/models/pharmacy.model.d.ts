import { Region } from "../../region/models/region.model";
import { District } from "../../district/models/district.model";
import { Medicine } from "../../medicines/models/medicine.model";
import { Model } from "sequelize-typescript";
interface IPharmacyAttr {
    name: string;
    address: string;
    location: string;
    phone: string;
    email: string;
    regionId: number;
    districtId: number;
}
export declare class Pharmacy extends Model<Pharmacy, IPharmacyAttr> {
    id: number;
    name: string;
    address: string;
    location: string;
    phone: string;
    email: string;
    regionId: number;
    districtId: number;
    region: Region;
    district: District;
    medicine: Medicine[];
}
export {};

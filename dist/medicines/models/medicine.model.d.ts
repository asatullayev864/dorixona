import { Model } from "sequelize-typescript";
import { MedicineType } from "../../medicine-type/models/medicine-type.model";
import { Pharmacy } from "../../pharmacies/models/pharmacy.model";
interface IMedicine {
    name: string;
    manufacture: string;
    medicine_type_id: number;
    price: number;
    expiry_date: Date;
    info?: string;
}
export declare class Medicine extends Model<Medicine, IMedicine> {
    id: number;
    name: string;
    manufacture: string;
    price: number;
    expiry_date: Date;
    info: string;
    medicine_type_id: number;
    medicineType: MedicineType;
    pharmacy: Pharmacy[];
}
export {};

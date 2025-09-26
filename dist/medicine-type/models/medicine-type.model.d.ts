import { Model } from "sequelize-typescript";
import { Medicine } from "../../medicines/models/medicine.model";
interface IMedicineTypeAttr {
    name: string;
}
export declare class MedicineType extends Model<MedicineType, IMedicineTypeAttr> {
    id: number;
    name: string;
    medicine: Medicine[];
}
export {};

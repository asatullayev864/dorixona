import { Model } from "sequelize-typescript";
interface IStockAttr {
    pharmacyId: number;
    medicineId: number;
    quantity: number;
}
export declare class Stock extends Model<Stock, IStockAttr> {
    id: number;
    pharmacyId: number;
    medicineId: number;
    quantity: number;
}
export {};

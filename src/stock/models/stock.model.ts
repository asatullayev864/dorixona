import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Pharmacy } from "../../pharmacies/models/pharmacy.model";
import { Medicine } from "../../medicines/models/medicine.model";

interface IStockAttr {
    pharmacyId: number;
    medicineId: number;
    quantity: number;
}

@Table({ tableName: "stock" })
export class Stock extends Model<Stock, IStockAttr> {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    declare id: number;

    @ForeignKey(() => Pharmacy)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    declare pharmacyId: number;

    @ForeignKey(() => Medicine)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    declare medicineId: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        defaultValue: 0
    })
    declare quantity: number;
}
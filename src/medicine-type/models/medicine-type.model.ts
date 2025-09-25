import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Medicine } from "../../medicines/models/medicine.model";

interface IMedicineTypeAttr{
    name: string;
}

@Table({ tableName: "medicineType" })
export class MedicineType extends Model<MedicineType, IMedicineTypeAttr>{
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    declare id: number;

    @Column({
        type: DataType.STRING,
        allowNull: false 
    })
    declare name: string

    @HasMany(() => Medicine)
    medicine: Medicine[];
}
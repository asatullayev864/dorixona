import { AutoIncrement, Column, DataType, Model, Table } from "sequelize-typescript";

interface IMedicineTypeAttr{
    name: string;
}

@Table({ tableName: "MedicineType" })
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
}
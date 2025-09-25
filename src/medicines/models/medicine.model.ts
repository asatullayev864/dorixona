import { Column, DataType, Model, Table, ForeignKey, BelongsTo } from "sequelize-typescript";
import { MedicineType } from "../../medicine-type/models/medicine-type.model";

interface IMedicine {
    name: string;
    manufacture: string;
    medicine_type_id: number;
    price: number;
    expiry_date: Date;
    info?: string;
}

@Table({ tableName: "medicine" })
export class Medicine extends Model<Medicine, IMedicine> {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    })
    declare id: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    declare name: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    declare manufacture: string;
    
    @Column({
        type: DataType.DECIMAL(10, 2),
        allowNull: false,
    })
    declare price: number;
    
    @Column({
        type: DataType.DATE,
        allowNull: false,
    })
    declare expiry_date: Date;
    
    @Column({
        type: DataType.TEXT,
    })
    declare info: string;
    
    @ForeignKey(() => MedicineType)
    @Column({
        type: DataType.INTEGER,
        allowNull: true,
    })
    declare medicine_type_id: number;

    @BelongsTo(() => MedicineType)
    medicineType: MedicineType;
}
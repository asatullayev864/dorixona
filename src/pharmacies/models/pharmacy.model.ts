import { Region } from "../../region/models/region.model";
import { District } from "../../district/models/district.model";
import { Medicine } from "../../medicines/models/medicine.model";
import { Stock } from "../../stock/models/stock.model";
import { BelongsTo, BelongsToMany, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";

interface IPharmacyAttr {
    name: string;
    address: string;
    location: string;
    phone: string;
    email: string;
    regionId: number;
    districtId: number;
}

@Table({ tableName: "pharmacy" })
export class Pharmacy extends Model<Pharmacy, IPharmacyAttr> {
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
    declare name: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    declare address: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    declare location: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    declare phone: string;

    @Column({
        type: DataType.STRING,
        allowNull: true
    })
    declare email: string;

    @ForeignKey(() => Region)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    declare regionId: number;

    @ForeignKey(() => District)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    declare districtId: number;

    @BelongsTo(() => Region)
    declare region: Region;

    @BelongsTo(() => District)
    declare district: District;

    @BelongsToMany(() => Medicine, () => Stock)             // Stock orqali medikenst ni ulash 
    medicine: Medicine[];
}
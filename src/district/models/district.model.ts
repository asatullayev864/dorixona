import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Region } from "../../region/models/region.model";

interface IDistrictCreationAttr {
    name: string;
    region_id: number;
}

@Table({ tableName: "district" })
export class District extends Model<District, IDistrictCreationAttr> {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    declare id: number;

    @Column({
        type: DataType.STRING(50),
        allowNull: false
    })
    declare name: string;

    @ForeignKey(() => Region) // id beriladigan tablega ForeignKey qoyiladi
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        onDelete: "CASCADE"
    })
    declare region_id: number;

    @BelongsTo(() => Region) // BelongsTo berilishi kerak
    region: Region;
}
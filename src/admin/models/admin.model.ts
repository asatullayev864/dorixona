import { Column, DataType, Model, Table } from "sequelize-typescript";
import { UserRole } from "../../../roles/rol/roles";

interface IAdminAttr {
    name: string;
    email: string;
    password: string;
    phone_number: string;
    is_active?: boolean,
    role: string
}

@Table({ tableName: "admin" })
export class Admin extends Model<Admin, IAdminAttr> {
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
        unique: true,
    })
    declare email: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    declare password: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    declare phone_number: string;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
        defaultValue: true
    })
    declare is_active: boolean;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    declare role: string;
}
import { IsString, IsNotEmpty, IsNumber, IsDateString, IsOptional } from 'class-validator';

export class CreateMedicineDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    manufacture: string;

    @IsNumber()
    @IsNotEmpty()
    medicine_type_id: number;

    @IsNumber()
    @IsNotEmpty()
    price: number;

    @IsDateString()
    @IsNotEmpty()
    expiry_date: Date;

    @IsString()
    @IsOptional()
    info?: string;
}
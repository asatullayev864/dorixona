import { IsString, IsNotEmpty, IsNumber, IsDateString, IsOptional, MinLength, MaxLength, Min } from "class-validator";

export class CreateMedicineDto {
    @IsString({ message: "Medicine nomi string bo'lishi kerak" })
    @IsNotEmpty({ message: "Medicine nomi bo'sh bo'lmasligi kerak" })
    @MinLength(2, { message: "Medicine nomi kamida 2 ta belgidan iborat bo'lishi kerak" })
    @MaxLength(100, { message: "Medicine nomi 100 ta belgidan oshmasligi kerak" })
    name: string;

    @IsString({ message: "Manufacture string bo'lishi kerak" })
    @IsNotEmpty({ message: "Manufacture bo'sh bo'lmasligi kerak" })
    @MaxLength(100, { message: "Manufacture 100 ta belgidan oshmasligi kerak" })
    manufacture: string;

    @IsNumber({}, { message: "medicine_type_id raqam bo'lishi kerak" })
    @IsNotEmpty({ message: "medicine_type_id bo'sh bo'lmasligi kerak" })
    medicine_type_id: number;

    @IsNumber({}, { message: "Price raqam bo'lishi kerak" })
    @IsNotEmpty({ message: "Price bo'sh bo'lmasligi kerak" })
    @Min(0, { message: "Price manfiy bo'lmasligi kerak" })
    price: number;

    @IsDateString({}, { message: "expiry_date YYYY-MM-DD formatida bo'lishi kerak" })
    @IsNotEmpty({ message: "expiry_date bo'sh bo'lmasligi kerak" })
    expiry_date: Date;

    @IsString({ message: "Info string bo'lishi kerak" })
    @IsOptional()
    @MaxLength(255, { message: "Info 255 ta belgidan oshmasligi kerak" })
    info?: string;
}
import { IsNotEmpty, IsString, MinLength, MaxLength } from "class-validator";

export class CreateMedicineTypeDto {
    @IsString({ message: "Medicine type nomi string bo'lishi kerak" })
    @IsNotEmpty({ message: "Medicine type nomi bo'sh bo'lmasligi kerak" })
    @MinLength(2, { message: "Medicine type nomi kamida 2 ta belgidan iborat bo'lishi kerak" })
    @MaxLength(50, { message: "Medicine type nomi 50 ta belgidan oshmasligi kerak" })
    name: string;
}
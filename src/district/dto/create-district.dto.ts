import { IsNotEmpty, IsInt, IsString, MinLength } from 'class-validator';

export class CreateDistrictDto {
    @IsString({ message: "District nomi string bo'lishi kerak" })
    @IsNotEmpty({ message: "District nomi bo'sh bo'lmasligi kerak" })
    @MinLength(2, { message: "District nomi kamida 2 ta belgidan iborat bo'lishi kerak" })
    name: string;

    @IsInt({ message: "region_id butun son bo'lishi kerak" })
    @IsNotEmpty({ message: "region_id bo'sh bo'lmasligi kerak" })
    region_id: number;
}
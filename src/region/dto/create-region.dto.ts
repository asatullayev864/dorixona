import { IsNotEmpty, IsString, MinLength, MaxLength } from "class-validator";

export class CreateRegionDto {
    @IsString({ message: "Region nomi string bo'lishi kerak" })
    @IsNotEmpty({ message: "Region nomi bo'sh bo'lmasligi kerak" })
    @MinLength(2, { message: "Region nomi kamida 2 ta belgidan iborat bo'lishi kerak" })
    @MaxLength(50, { message: "Region nomi 50 ta belgidan oshmasligi kerak" })
    name: string;
}
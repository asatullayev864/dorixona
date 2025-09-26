import {
    IsEmail,
    IsNotEmpty,
    IsPhoneNumber,
    IsString,
    MaxLength,
    IsInt
} from "class-validator";

export class CreatePharmacyDto {
    @IsString({ message: "Pharmacy nomi string bo'lishi kerak" })
    @IsNotEmpty({ message: "Pharmacy nomi bo'sh bo'lmasligi kerak" })
    @MaxLength(100, { message: "Pharmacy nomi 100 ta belgidan oshmasligi kerak" })
    name: string;

    @IsString({ message: "Address string bo'lishi kerak" })
    @IsNotEmpty({ message: "Address bo'sh bo'lmasligi kerak" })
    @MaxLength(200, { message: "Address 200 ta belgidan oshmasligi kerak" })
    address: string;

    @IsString({ message: "Location string bo'lishi kerak" })
    @IsNotEmpty({ message: "Location bo'sh bo'lmasligi kerak" })
    @MaxLength(100, { message: "Location 100 ta belgidan oshmasligi kerak" })
    location: string;

    @IsPhoneNumber("UZ", { message: "Telefon raqami O'zbekiston formatida bo'lishi kerak" })
    @IsNotEmpty({ message: "Telefon raqami bo'sh bo'lmasligi kerak" })
    phone: string;

    @IsEmail({}, { message: "Email noto'g'ri formatda" })
    @IsNotEmpty({ message: "Email bo'sh bo'lmasligi kerak" })
    email: string;

    @IsInt({ message: "regionId butun son bo'lishi kerak" })
    @IsNotEmpty({ message: "regionId bo'sh bo'lmasligi kerak" })
    regionId: number;

    @IsInt({ message: "districtId butun son bo'lishi kerak" })
    @IsNotEmpty({ message: "districtId bo'sh bo'lmasligi kerak" })
    districtId: number;
}
import { IsString, IsEmail, MinLength, IsOptional, IsPhoneNumber, IsEnum, IsBoolean, IsNotEmpty } from 'class-validator';
import { UserRole } from '../../../roles/rol/roles';

export class CreateAdminDto {
    @IsString()
    @MinLength(2, { message: "Ism kamida 2 ta belgidan iborat bo'lishi kerak" })
    name: string;

    @IsEmail({}, { message: "Email noto'g'ri kiritilgan" })
    email: string;

    @IsString()
    @MinLength(6, { message: "Parol kamida 6 ta belgidan iborat bo'lishi kerak" })
    password: string;

    @IsPhoneNumber("UZ", { message: "Telefon raqam noto'g'ri" })
    phone_number: string;

    @IsBoolean()
    @IsNotEmpty()
    is_active: boolean;

    @IsOptional()
    @IsEnum(UserRole, { message: "Role faqat SUPER_ADMIN, ADMIN yoki USER bo'lishi mumkin" })
    role: UserRole = UserRole.ADMIN;
}
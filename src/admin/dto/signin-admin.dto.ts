import { IsString, IsEmail, MinLength, IsOptional, IsPhoneNumber, IsEnum, IsBoolean, IsNotEmpty } from 'class-validator';
import { UserRole } from '../../../roles/rol/roles';

export class SigninAdminDto {
    @IsEmail({}, { message: "Email noto'g'ri kiritilgan" })
    email: string;

    @IsString()
    @MinLength(6, { message: "Parol kamida 6 ta belgidan iborat bo'lishi kerak" })
    password: string;
}
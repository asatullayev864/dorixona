import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { CreateAdminDto } from '../admin/dto/create-admin.dto';
import { SigninAdminDto } from '../admin/dto/signin-admin.dto';
import { Admin } from '../admin/models/admin.model';

@Injectable()
export class AuthService {
    constructor(
        @InjectModel(Admin) private adminRepo: typeof Admin,
        private readonly jwtService: JwtService,
    ) { }

    private async generateToken(admin: Admin) {
        const payload = {
            id: admin.id,
            email: admin.email,
            isActive: admin.is_active,
            role: admin.role
        };

        console.log(this.jwtService.sign(payload));
        return {
            token: this.jwtService.sign(payload)
        };
    }

    async signup(createAdminDto: CreateAdminDto) {
        const { name, email, password, is_active, phone_number } = createAdminDto;

        const existsEmail = await this.adminRepo.findOne({ where: { email } });
        if (existsEmail) {
            throw new ConflictException('Bunday admin mavjud');
        }

        const hashedPassword = await bcrypt.hash(password, 7);

        const newAdmin = await this.adminRepo.create({
            name,
            email,
            password: hashedPassword,
            phone_number,
            is_active,
            role: createAdminDto.role
        });

        return this.generateToken(newAdmin);
    }

    async signin(signinAdminDto: SigninAdminDto) {

        const { email, password } = signinAdminDto;

        const admin = await this.adminRepo.findOne({ where: { email } });
        if (!admin) {
            throw new UnauthorizedException("Email noto'g'ri");
        }

        const verifyPassword = await bcrypt.compare(password, admin.password);
        if (!verifyPassword) {
            throw new UnauthorizedException("Password noto'g'ri");
        }

        return this.generateToken(admin);
    }
}
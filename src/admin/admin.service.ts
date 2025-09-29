import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Admin } from './models/admin.model';

@Injectable()
export class AdminService {
  constructor(
    @InjectModel(Admin) private readonly adminModel: typeof Admin
  ) { }

  async create(createAdminDto: CreateAdminDto): Promise<Admin> {
    const { name, email, password, is_active, role } = createAdminDto
    if (!name || !email || !password || !is_active || !role) {
      throw new NotFoundException("Barchasini kiriting")
    }
    console.log(email)

    const existsEmail = await this.adminModel.findOne({ where: { email } })
    if (existsEmail) {
      throw new BadRequestException("Bunday email mavjud")
    }

    const existsPassword = await this.adminModel.findOne({ where: { password } })
    if (existsPassword) {
      throw new BadRequestException("Bunday password mavjud")
    }

    const newAdmin = await this.adminModel.create({ ...createAdminDto })



    return newAdmin;
  }

  async findAll(): Promise<Admin[]> {
    const admin = await this.adminModel.findAll({ include: { all: true }, order: [["id", "ASC"]] })

    return admin;
  }

  async findOne(id: number): Promise<Admin> {
    const admin = await this.adminModel.findByPk(id);
    if (!admin) {
      throw new NotFoundException(" Admin not found")
    }

    return admin;
  }

  async update(id: number, updateAdminDto: UpdateAdminDto): Promise<Admin> {
    const admin = await this.adminModel.findByPk(id)
    if (!admin) {
      throw new NotFoundException("Admin not found")
    }

    const { email } = updateAdminDto;

    const exsistEmail = await this.adminModel.findOne({ where: { email } })
    if (!exsistEmail) {
      throw new NotFoundException("Email not found")
    }

    const adminUpdate = await this.adminModel.update(updateAdminDto, { where: { id }, returning: true });

    return adminUpdate[1][0];
  }

  async remove(id: number) {
    const adminId = await this.adminModel.destroy({ where: { id } })
    if (!adminId) {
      throw new BadRequestException("Bunday ID da admin mavjud emas..!");
    }
    return {};
  }
}
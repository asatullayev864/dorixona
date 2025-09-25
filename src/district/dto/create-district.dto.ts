import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateDistrictDto {
    @IsString()
    @IsNotEmpty()
    readonly name: string;

    @IsNumber()
    @IsNotEmpty()
    readonly region_id: number;
}
import { IsInt, IsNotEmpty, Min } from "class-validator";

export class CreateStockDto {
    @IsInt({ message: "pharmacyId butun son bo'lishi kerak" })
    @IsNotEmpty({ message: "pharmacyId bo'sh bo'lmasligi kerak" })
    pharmacyId: number;

    @IsInt({ message: "medicineId butun son bo'lishi kerak" })
    @IsNotEmpty({ message: "medicineId bo'sh bo'lmasligi kerak" })
    medicineId: number;

    @IsInt({ message: "quantity butun son bo'lishi kerak" })
    @Min(0, { message: "quantity 0 dan kichik bo'lmasligi kerak" })
    quantity: number;
}
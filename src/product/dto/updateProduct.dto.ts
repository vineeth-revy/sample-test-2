//import { IsNumber, IsOptional, IsString } from "class-validator";


export class UpdateProductDTO {

   // @IsOptional()
   // @IsString()
    name?: string;

   // @IsNumber()
   // @IsOptional()
    qty?: number;

    //@IsNumber()
    //@IsOptional()
    price?: number;
}
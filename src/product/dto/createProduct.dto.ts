//import { IsNotEmpty, IsNumber, IsString } from "class-validator";


export class CreateProductDTO {

  //  @IsNotEmpty()
   // @IsString()
    name: string;

   // @IsNumber()
  //  @IsNotEmpty()
    qty: number;

  //  @IsNumber()
  //  @IsNotEmpty()
    price: number;
}
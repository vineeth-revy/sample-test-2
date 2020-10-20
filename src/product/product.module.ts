import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductResolver } from './product.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductModel } from './model/product.model';

@Module({
  imports:[TypeOrmModule.forFeature([ProductModel])],
  providers: [ProductService, ProductResolver]
})
export class ProductModule {}

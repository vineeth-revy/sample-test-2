
import { Args, Mutation, Query, Resolver, Root } from '@nestjs/graphql';
import { Product } from 'src/graphql';
import { CreateProductDTO } from './dto/createProduct.dto';
import { UpdateProductDTO } from './dto/updateProduct.dto';
import { ProductService } from './product.service';

@Resolver()
export class ProductResolver {

    constructor(
        private productService: ProductService
    ) {}

    @Query()
    async allProducts(): Promise<Product[]> {
        return await this.productService.findall();
    }

    @Query()
    async findOne(@Args('id') id): Promise<Product> {
        return await this.productService.findOne(id);
    }

    @Mutation()
    async createProduct(@Args('product') product: CreateProductDTO): Promise<Product> {
        // let input = new CreateProductDTO();
        let input  = {...product}
        return await this.productService.create(input);
    }

    @Mutation()
    async deleteProduct(@Args('id' ) id): Promise<String> {
        return await this.productService.delete(id);
    }

    @Mutation()
    async updateProduct(@Args('id') id,@Args('product') product:UpdateProductDTO): Promise<Product> {
        console.log("hii",product);
        return await this.productService.update(id,product);
    }

    @Query()
    async stopDataLog(): Promise<String> {
        return this.productService.stopDataLog();
    }

    @Query()
    async startDataLog(): Promise<String> {
        return this.productService.startDataLog();
    }

}

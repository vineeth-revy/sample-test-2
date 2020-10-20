import { Injectable,Logger } from '@nestjs/common';
import { Cron, CronExpression, SchedulerRegistry } from '@nestjs/schedule';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/graphql';
import { Repository } from 'typeorm';
import { CreateProductDTO } from './dto/createProduct.dto';
import { UpdateProductDTO } from './dto/updateProduct.dto';
import { ProductModel } from './model/product.model';

@Injectable()
export class ProductService {

    constructor(
        @InjectRepository(ProductModel) private productRep: Repository<ProductModel>,
        private schedulerRegistry: SchedulerRegistry
    ) {}

    private logger = new Logger("Data Logs",true)

    @Cron(CronExpression.EVERY_10_SECONDS,{name:"Data Logs"})
    async initialData()
    {
        let result = await this.findall();
        this.logger.log(result);
    }

    async stopDataLog(): Promise<String> {
        const job = this.schedulerRegistry.getCronJob("Data Logs");
        job.stop();
        console.log("Data log end");
        return Promise.resolve("Data log stopped")
    }

    async startDataLog(): Promise<String> {
        const job = this.schedulerRegistry.getCronJob("Data Logs");
        job.start();
        console.log("Restarted the cron job");
        return Promise.resolve("Data log Restarted");
    }

    async findall():Promise<Product[]> {
        let result =  await this.productRep.find();
        return result;
    }

    async create(product: CreateProductDTO): Promise<Product>{
        let result = await this.productRep.save(product);
        //console.log(result);
        return result;
    }

    async findOne(id: number | string): Promise<Product>{
        return await this.productRep.findOne(id);
    }

    async delete(id: number | string): Promise<String> {

        let result = await this.productRep.delete(id);
        if(result.affected)
            return "Successfully deleted";
        return "No such product exist";
    }

    async update(id: number | string,product: UpdateProductDTO): Promise<Product> {
        
        let old_product =await this.productRep.findOne(id);
        let new_p = await this.productRep.merge(old_product,product);
        return this.productRep.save(new_p);
    }
}

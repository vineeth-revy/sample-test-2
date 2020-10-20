import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ProductModel {

    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    qty: number;

    @Column()
    price: number;

    @CreateDateColumn()
    created: Date;
}
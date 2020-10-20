
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface UpdateInput {
    name?: string;
    qty?: number;
    price?: number;
}

export interface ProductInput {
    name: string;
    qty: number;
    price: number;
}

export interface IQuery {
    allProducts(): Product[] | Promise<Product[]>;
    findOne(id: string): Product | Promise<Product>;
    stopDataLog(): string | Promise<string>;
    startDataLog(): string | Promise<string>;
}

export interface IMutation {
    createProduct(product?: ProductInput): Product | Promise<Product>;
    deleteProduct(id: string): string | Promise<string>;
    updateProduct(id: string, product?: UpdateInput): Product | Promise<Product>;
}

export interface Product {
    id: string;
    name?: string;
    qty?: number;
    price?: number;
    created?: string;
}

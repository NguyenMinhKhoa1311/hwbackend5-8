import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProductDocument = HydratedDocument<Product>;

@Schema( {timestamps: true})
export class Product {
    @Prop()
    name: string;

    @Prop()
    price: number;

    @Prop()
    description: string;

    @Prop()
    imgSrc: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
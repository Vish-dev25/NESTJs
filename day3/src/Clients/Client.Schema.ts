import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Client {
    @Prop()
    clientname: string;

    @Prop()
    address: string;

    @Prop()
    city: string;

    @Prop()
    phone: number;

}
export const ClientSchema = SchemaFactory.createForClass(Client)
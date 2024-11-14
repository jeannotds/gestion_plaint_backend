import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


@Schema({ timestamps: true })
export class Subscriber {
    @Prop({ required: true })
    name: string;

    @Prop({})
    firstname: string;

    @Prop({ unique: true })
    email: string;

    @Prop({ required: true })
    password: string;

    @Prop({ required: false })
    profil: string;

    @Prop({ unique: true })
    telephone: string;

}


export const SubscriberSchema = SchemaFactory.createForClass(Subscriber);
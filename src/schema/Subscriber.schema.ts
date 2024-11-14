import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


@Schema()
export class Subcriber {
    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    firstname: string;

    @Prop({ unique: true })
    email: string;

    @Prop({ required: true })
    password: string;

    @Prop({})
    profil: string;

    @Prop({ unique: true })
    telephone: string;

}


export const SchemaSubscbriber = SchemaFactory.createForClass(Subcriber);
import { Prop, Schema } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { Subscriber } from "./Subscriber.schema";


@Schema()
export class Account {
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Subscriber' })
    subscriber: Subscriber;
}
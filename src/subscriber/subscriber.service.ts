import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Subscriber } from 'src/schema/Subscriber.schema';

@Injectable()
export class SubscriberService {

    constructor(@InjectModel(Subscriber.name) private subscriberModel: Model<Subscriber>) { }

    async createSubscribers() {
        const subscriber = await this.subscriberModel.create({
            name: 'Sendo',
            firstname: 'Beni',
            email: 'sendobeni@gmail.com',
            telephone: '243815910770',
            password: 'sendobn'
        });
        return subscriber;
    }
}

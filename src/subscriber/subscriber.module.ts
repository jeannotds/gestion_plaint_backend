import { Module } from '@nestjs/common';
import { SubscriberController } from './subscriber.controller';
import { SubscriberService } from './subscriber.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SubscriberSchema } from 'src/schema/Subscriber.schema';
import { Subscriber } from 'src/schema/Subscriber.schema';

@Module({
  imports: [MongooseModule.forFeature([
    { name: Subscriber.name, schema: SubscriberSchema },
  ])],
  controllers: [SubscriberController],
  providers: [SubscriberService]
})
export class SubscriberModule { }

import { Module } from '@nestjs/common';
import { AccountModule } from './account/account.module';
import { MongooseModule } from '@nestjs/mongoose';
import { SubscriberModule } from './subscriber/subscriber.module';

@Module({
  imports: [AccountModule, MongooseModule.forRoot('mongodb://localhost/gestion_plaint'), SubscriberModule],
  controllers: [],
  providers: [],
})
export class AppModule { }

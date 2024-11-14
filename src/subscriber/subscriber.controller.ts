import { Controller, Post } from '@nestjs/common';
import { SubscriberService } from './subscriber.service';

@Controller('subscribers')
export class SubscriberController {
    constructor(private subscriberService: SubscriberService) { }

    @Post()
    createSubscribers() {
        return this.subscriberService.createSubscribers();
    }
}

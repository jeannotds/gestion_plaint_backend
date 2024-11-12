import { Controller, Get } from '@nestjs/common';
import { AccountService } from './account.service';

@Controller('account')
export class AccountController {

    constructor(private readonly accountService: AccountService) { }

    @Get()
    getAccount(): string {
        console.log('Salut');
        return this.accountService.getAccount();
    }

}

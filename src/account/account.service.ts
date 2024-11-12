import { Injectable } from '@nestjs/common';

@Injectable()
export class AccountService {
    getAccount(): string {
        return 'Je suis Jeannot Diambu Ds'
    }
}

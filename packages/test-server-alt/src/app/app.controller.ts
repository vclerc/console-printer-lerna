import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('apps')
export class AppController {

    constructor(
        private readonly appService: AppService,
    ) {}

    @Get()
    root() {
        this.appService.print();
    }

}

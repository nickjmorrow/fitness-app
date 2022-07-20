import { Controller, Get } from '@nestjs/common';

@Controller('healthcheck')
export class HealthcheckController {
    @Get()
    getHealth(): string {
        return 'v.2022-07-19.08.52.pm';
    }
}

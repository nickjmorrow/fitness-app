import { Controller, Post } from '@nestjs/common';
import { DataSeederService } from './data-seeder.service';

@Controller('data-seeder')
export class DataSeederController {
    constructor(private readonly dataSeederService: DataSeederService) {}

    @Post('/seed-data')
    async seedData(): Promise<void> {
        return this.dataSeederService.seedData();
    }
}

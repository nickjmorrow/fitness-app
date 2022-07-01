import { Controller, Get } from '@nestjs/common';

@Controller('workout')
export class WorkoutController {
    @Get()
    getWorkouts() {
        return [{
            name: 'Legs'
        }, { name: 'Back' }];
    }
}

import { Controller, Get } from '@nestjs/common';

@Controller('workout')
export class WorkoutController {
    @Get()
    getWorkouts() {
        return [{
            name: 'Legs', id: 'legs',
        }, { name: 'Back', id: 'back' }, { name: 'Arms', id: 'arms' }, { name: 'Chest', id: 'chest' }];
    }
}

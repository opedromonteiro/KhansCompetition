import { Fighter } from './Fighter.js';
import { FighterState } from '../../constants/fighter.js';

export class Roshi extends Fighter {
    constructor(x, y, velocity) {
        super('Roshi', x, y, velocity);

        this.image = document.querySelector('img[alt="roshi"]');

        this.frames = new Map([
            // Idle Stance
            ['idle-1', [[182, 36, 63, 98], [32, 98]]],
            ['idle-2', [[259, 35, 63, 98], [32, 98]]],
            ['idle-3', [[335, 34, 63, 99], [32, 99]]],
            ['idle-4', [[414, 32, 63, 100], [32, 100]]],
            ['idle-5', [[182, 36, 63, 98], [32, 98]]],

            // Move Forwards
            ['forwards-1', [[494, 30, 63, 102], [32, 102]]],
            ['forwards-2', [[170, 155, 76, 101], [38, 101]]],
            ['forwards-3', [[253, 155, 79, 102], [40, 102]]],
            ['forwards-4', [[339, 155, 83, 101], [51, 101]]],
            ['forwards-5', [[432, 154, 80, 102], [40, 102]]],

            // Move Backwards
            ['backwards-1', [[432, 154, 80, 102], [40, 102]]],
            ['backwards-2', [[339, 155, 83, 101], [51, 101]]],
            ['backwards-3', [[253, 155, 79, 102], [40, 102]]],
            ['backwards-4', [[170, 155, 76, 101], [38, 101]]],
            ['backwards-5', [[494, 30, 63, 102], [32, 102]]],
        ]);

        this.animations = {
            [FighterState.IDLE]: ['idle-1', 'idle-2', 'idle-3', 'idle-4', 'idle-5'],
            [FighterState.WALK_FORWARD]: ['forwards-1', 'forwards-2', 'forwards-3', 'forwards-4', 'forwards-5'],
            [FighterState.WALK_BACKWARD]: ['backwards-1', 'backwards-2', 'backwards-3', 'backwards-4', 'backwards-5'],
        };
    }
}
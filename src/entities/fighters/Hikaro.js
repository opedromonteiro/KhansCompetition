import { Fighter } from './Fighter.js';
import { FighterState } from '../../constants/fighter.js';

export class Hikaro extends Fighter {
    constructor(x, y, velocity) {
        super('Hikaro', x, y, velocity);

        this.image = document.querySelector('img[alt="hikaro"]');

        this.frames = new Map([
            // Idle Stance
            ['idle-1', [[364, 178, 77, 104], [39, 104]]],
            ['idle-2', [[364, 178, 77, 104], [39, 104]]],
            ['idle-3', [[364, 178, 77, 104], [39, 104]]],
            ['idle-4', [[364, 178, 77, 104], [39, 104]]],
            ['idle-5', [[364, 178, 77, 104], [39, 104]]],

            // Move Forwards
            ['forwards-1', [[382, 310, 68, 107], [34, 107]]],
            ['forwards-2', [[471, 307, 68, 113], [34, 113]]],
            ['forwards-3', [[562, 303, 81, 116], [41, 116]]],
            ['forwards-4', [[664, 308, 101, 109], [51, 109]]],
            ['forwards-5', [[783, 311, 68, 102], [34, 102]]],

            // Move Backwards
            ['backwards-1', [[783, 311, 68, 102], [34, 102]]],
            ['backwards-2', [[664, 308, 101, 109], [51, 109]]],
            ['backwards-3', [[562, 303, 81, 116], [41, 116]]],
            ['backwards-4', [[471, 307, 68, 113], [34, 113]]],
            ['backwards-5', [[382, 310, 68, 107], [34, 107]]],
        ]);

        this.animations = {
            [FighterState.IDLE]: ['idle-1', 'idle-2', 'idle-3', 'idle-4', 'idle-5'],
            [FighterState.WALK_FORWARD]: ['forwards-1', 'forwards-2', 'forwards-3', 'forwards-4', 'forwards-5'],
            [FighterState.WALK_BACKWARD]: ['backwards-1', 'backwards-2', 'backwards-3', 'backwards-4', 'backwards-5'],
        };
    }
}
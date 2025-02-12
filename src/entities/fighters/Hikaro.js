import { FighterState } from '../../constants/fighter.js';
import { Fighter } from './Fighter.js';

export class Hikaro extends Fighter {
    constructor(x, y, velocity){
        super('Hikaro', x, y, velocity);

        this.image = document.querySelector('img[alt="hikaro"]');

        this.frames = new Map ([
            // eu defini a parte das animações pra tras e idle o mais basico porque ainda nao tá a funcionar
            // Idle
            ['idle-1', [[364, 178, 77, 104], [0, 0]]],
            ['idle-2', [[364, 178, 77, 104], [0, 0]]],
            ['idle-3', [[364, 178, 77, 104], [0, 0]]],
            ['idle-4', [[364, 178, 77, 104], [0, 0]]],
            ['idle-5', [[364, 178, 77, 104], [0, 0]]],

            // Move Forwards
            ['forwards-1', [[382, 310, 68, 107], [0, 0]]],
            ['forwards-2', [[471, 307, 68, 113], [0, 0]]],
            ['forwards-3', [[562, 303, 81, 116], [0, 0]]],
            ['forwards-4', [[664, 308, 101, 109], [0, 0]]],
            ['forwards-5', [[783, 311, 68, 102], [0, 0]]],

            // Move Backwards
            ['backwards-1', [[783, 311, 68, 102], [0, 0]]],
            ['backwards-2', [[664, 308, 101, 109], [0, 0]]],
            ['backwards-3', [[562, 303, 81, 116], [0, 0]]],
            ['backwards-4', [[471, 307, 68, 113], [0, 0]]],
            ['backwards-5', [[382, 310, 68, 107], [0, 0]]],
        ]);
        
        this.animations = {
            [FighterState.IDLE]: ['idle-1', 'idle-2', 'idle-3', 'idle-4', 'idle-5'],
            [FighterState.WALK_FORWARD]: ['forwards-1', 'forwards-2', 'forwards-3', 'forwards-4', 'forwards-5'],
            [FighterState.WALK_BACKWARD]: ['backwards-1', 'backwards-2', 'backwards-3', 'backwards-4', 'backwards-5'],
        };
    }
}
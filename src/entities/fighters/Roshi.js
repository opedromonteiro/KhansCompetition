import { FighterState } from '../../constants/fighter.js';
import { Fighter } from './Fighter.js';

export class Roshi extends Fighter {
    constructor(x, y, velocity) {
        super('Roshi', x, y, velocity);

        this.image = document.querySelector('img[alt="roshi"]');

        this.frames = new Map ([
            // eu defini a parte das animações pra tras e idle o mais basico porque ainda nao tá a funcionar
            ['idle-1', [[182, 36, 63, 98], [0, 0]]],
            ['idle-2', [[259, 35, 63, 98], [0, 0]]],
            ['idle-3', [[335, 34, 63, 99], [0, 0]]],
            ['idle-4', [[414, 32, 63, 100], [0, 0]]],
            ['idle-5', [[182, 36, 63, 98], [0, 0]]],

            ['forwards-1', [[494, 30, 63, 102], [0, 0]]],
            ['forwards-2', [[170, 155, 76, 101], [0, 0]]],
            ['forwards-3', [[253, 155, 79, 102], [0, 0]]],
            ['forwards-4', [[339, 155, 83, 101], [0, 0]]],
            ['forwards-5', [[432, 154, 80, 102], [0, 0]]],
            // ['forwards-6', [529, 155, 71, 101]],
            // ['forwards-7', [610, 155, 84, 101]],
            // ['forwards-8', [705, 155, 88, 101]],
            // ['forwards-9', [818, 153, 86, 102]],
            // ['forwards-10', [919, 153, 79, 102]],
            // ['forwards-11', [1015, 154, 70, 101]],

            ['backwards-1', [[432, 154, 80, 102], [0, 0]]],
            ['backwards-2', [[339, 155, 83, 101], [0, 0]]],
            ['backwards-3', [[253, 155, 79, 102], [0, 0]]],
            ['backwards-4', [[170, 155, 76, 101], [0, 0]]],
            ['backwards-1', [[494, 30, 63, 102], [0, 0]]],
        ]);

        this.animations = {
            [FighterState.IDLE]: ['idle-1', 'idle-2', 'idle-3', 'idle-4', 'idle-5'],
            [FighterState.WALK_FORWARD]: ['forwards-1', 'forwards-2', 'forwards-3', 'forwards-4', 'forwards-5'],
            [FighterState.WALK_BACKWARD]: ['backwards-1', 'backwards-2', 'backwards-3', 'backwards-4', 'backwards-5'],
        };
    }
}
import { Fighter } from './Fighter.js';
import { FighterState } from '../../constants/fighter.js';

export class Hikaro extends Fighter {
    constructor(x, y, velocity) {
        super('Hikaro', x, y, velocity);

        this.image = document.querySelector('img[alt="hikaro"]');

        this.frames = new Map([
            // Idle Stance
            ['idle-1', [[364, 178, 77, 104], [39, 104]]],
            ['idle-2', [[465, 177, 77, 104], [39, 104]]],
            ['idle-3', [[565, 176, 77, 103], [39, 103]]],
            ['idle-4', [[670, 175, 77, 104], [39, 104]]],
            ['idle-5', [[772, 175, 76, 103], [39, 103]]],

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

            // Jump Up
            ['jump-up-1', [[183, 1355, 71, 133], [35, 133]]],
            ['jump-up-2', [[293, 1370, 60, 102], [30, 102]]],
            ['jump-up-3', [[386, 1383, 60, 79], [30, 79]]],

            // Jump Forwards/Backwards
            ['jump-roll-1', [[185, 1948, 65, 121], [33, 121]]],
            ['jump-roll-2', [[280, 1963, 85, 92], [42, 92]]],
            ['jump-roll-3', [[172, 983, 71, 121], [35, 121]]],
            ['jump-roll-4', [[172, 983, 71, 121], [35, 121]]],
            ['jump-roll-5', [[172, 983, 71, 121], [35, 121]]],
            
        ]);

        this.animations = {
            [FighterState.IDLE]: [
                ['idle-1', 68], ['idle-2', 68], ['idle-3', 68], ['idle-4', 68], ['idle-5', 68],
            ],
            [FighterState.WALK_FORWARD]: [
                ['forwards-1', 65], ['forwards-2', 65], ['forwards-3', 65], ['forwards-4', 65], ['forwards-5', 65],
            ],
            [FighterState.WALK_BACKWARD]: [
                ['backwards-1', 65], ['backwards-2', 65], ['backwards-3', 65], ['backwards-4', 65], ['backwards-5', 65],
            ],
            [FighterState.JUMP_UP]: [
                ['jump-up-1', 180], ['jump-up-2',100], ['jump-up-3',180], ['jump-up-2',100], ['jump-up-1', -1],
            ],
            [FighterState.JUMP_FORWARD]: [
                ['jump-up-1', 180], ['jump-up-2',100], ['jump-up-3',180], ['jump-up-2',100], ['jump-up-1', -1],
            ],
            [FighterState.JUMP_BACKWARD]: [
                ['jump-up-1', 180], ['jump-up-2',100], ['jump-up-3',180], ['jump-up-2',100], ['jump-up-1', -1],
            ],
        };

        this.initialVelocity = {
            x: {
                [FighterState.WALK_FORWARD]: 200,
                [FighterState.WALK_BACKWARD]: -150,
                [FighterState.JUMP_UP]: 0,
                [FighterState.JUMP_FORWARD]: 170,
                [FighterState.JUMP_BACKWARD]: -200,
            },
            jump: -420,
        };

        this.gravity = 1000;
    }
}
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

            // Jump Up
            ['jump-up-1', [[172, 983, 71, 121], [35, 121]]],
            ['jump-up-2', [[971, 1002, 67, 95], [33, 95]]],
            ['jump-up-3', [[1063, 1000, 69, 72], [35, 72]]],
            
            // Jump Forwards/Backwards
            ['jump-roll-1', [[752, 1511, 64, 99], [35, 121]]],
            ['jump-roll-2', [[840, 1526, 65, 76], [35, 121]]],
            ['jump-roll-3', [[172, 983, 71, 121], [35, 121]]],
            ['jump-roll-4', [[172, 983, 71, 121], [35, 121]]],
            ['jump-roll-5', [[172, 983, 71, 121], [35, 121]]],
        ]);

        this.animations = {
            [FighterState.IDLE]: [
                ['idle-1', 130], ['idle-2', 130], ['idle-3', 130], ['idle-4', 130], ['idle-5', 130],
            ],
            [FighterState.WALK_FORWARD]: [
                ['forwards-1', 65], ['forwards-2', 65], ['forwards-3', 65], ['forwards-4', 65], ['forwards-5', 65],
            ],
            [FighterState.WALK_BACKWARD]: [
                ['backwards-1', 65], ['backwards-2', 65], ['backwards-3', 65], ['backwards-4', 65], ['backwards-5', 65],
            ],
            [FighterState.JUMP_UP]: [
                ['jump-up-1', 140], ['jump-up-2',120], ['jump-up-3',180], ['jump-up-2',120], ['jump-up-1', -1],
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
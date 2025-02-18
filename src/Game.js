import { Hikaro } from './entities/fighters/Hikaro.js';
import { Roshi } from './entities/fighters/Roshi.js';
import { Stage } from './entities/Stage.js';
import { FpsCounter } from './entities/FpsCounter.js';
import { STAGE_FLOOR } from './constants/stage.js';
import { FighterDirection} from './constants/fighter.js';
import { pollGamepads, registerGamepadEvents, registerKeyboardEvents } from './InputHandler.js';

export class Game {
    constructor() {
        this.context = this.getContext();
        this.fighters = [
            new Roshi(104, STAGE_FLOOR, FighterDirection.RIGHT, 0),
            new Hikaro(280, STAGE_FLOOR, FighterDirection.LEFT, 1),
        ];
        
        this.entities = [
            new Stage(),
            ...this.fighters,
            new FpsCounter(),
        ];
        
        this.frameTime = {
            previous: 0,
            secondsPassed: 0,    
        };
    }

    getContext() {
        const canvasEl = document.querySelector('canvas');
        const context = canvasEl.getContext('2d');

        context.imageSmoothingEnabled = false;

        return context;
    }

    update() {
        for(const entity of this.entities) {
            entity.update(this.frameTime, this.context);
        }
    }

    draw() {
        for(const entity of this.entities) {
            entity.draw(this.context);
        }
    }

    frame(time) {
        window.requestAnimationFrame(this.frame.bind(this));

        this.frameTime = {
            secondsPassed: (time - this.frameTime.previous) / 1000,
            previous: time,
        }

        pollGamepads();
        this.update();
        this.draw();
    }

    start () {
        registerKeyboardEvents();
        registerGamepadEvents();

        window.requestAnimationFrame(this.frame.bind(this));
    }
}

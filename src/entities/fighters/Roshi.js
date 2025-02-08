import { Fighter } from './Fighter.js';

export class Roshi extends Fighter {
    constructor(x, y, velocity) {
        super('Roshi', x, y, velocity);

        this.image = document.querySelector('img[alt="roshi"]');
    }
}
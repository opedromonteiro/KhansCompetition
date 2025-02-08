import { Fighter } from './Fighter.js';

export class Hikaro extends Fighter {
    constructor(x, y, velocity){
        super('Hikaro', x, y, velocity);

        this.image = document.querySelector('img[alt="hikaro"]');
    }
}
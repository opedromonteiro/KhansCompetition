import { Hikaro } from "./entities/fighters/Hikaro.js";
import { Roshi } from "./entities/fighters/Roshi.js";
import { Stage } from "./entities/Stage.js";

const GameViewport = {
    WIDTH: 384,
    HEIGHT: 224,
};

window.onload = function () {
    const canvasEl = document.querySelector('canvas');
    const context = canvasEl.getContext('2d');

    canvasEl.width = GameViewport.WIDTH;
    canvasEl.height = GameViewport.HEIGHT;

    const hikaro = new Hikaro(80, 110, 1);
    const roshi = new Roshi(80, 110, -1);
    const stage = new Stage();

    function frame() {
        hikaro.update(context);
        roshi.update(context);

        stage.draw(context);
        hikaro.draw(context);
        roshi.draw(context);
        
        window.requestAnimationFrame(frame);
    }
    
    window.requestAnimationFrame(frame);
}

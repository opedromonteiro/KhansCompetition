const hikaro = document.querySelector('img[alt="hikaro"]');

const position = {
    x: 80,
    y: 110,
};

let velocity = 1;

export function updateHikaro(context) {
    position.x += velocity;

    if (position.x > context.canvas.width - hikaro.width || position.x < 0) {
        velocity = -velocity;
    }
}
export function drawHikaro(context) {
    context.drawImage(hikaro, position.x, position.y);
}
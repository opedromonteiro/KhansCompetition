const roshi = document.querySelector('img[alt="roshi"]');

const position = {
    x: 80,
    y: 110,
};

let velocity = -1;

export function updateRoshi(context) {
    position.x += velocity;

    if (position.x > context.canvas.width - roshi.width || position.x < 0) {
        velocity = -velocity;
    }
}
export function drawRoshi(context) {
    context.drawImage(roshi, position.x, position.y);
}
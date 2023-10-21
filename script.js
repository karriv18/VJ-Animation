const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const playerImage = new Image(); 
playerImage.src = 'images/shadow_dog.png'; 

const spriteWidth = 575;
const spriteHeight = 523;
let x = 0;
let y = 0; 
let frameX = 0; 
let frameY = 1;
let gameFrame = 0; 
const staggerFrame = 5

function animate(){
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    // ctx.fillRect(100, 50, 100, 100)
    // ctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh)
    ctx.drawImage(playerImage, frameX * spriteWidth, frameY * spriteHeight, 575, 523, 0, 0, spriteWidth, spriteWidth)
    // di ko to gaano get yung part na to 
    if (gameFrame % staggerFrame == 0){
        { frameX < 6 ? frameX++ : frameX = 0 }
    }
    gameFrame++
    requestAnimationFrame(animate);
}

animate()
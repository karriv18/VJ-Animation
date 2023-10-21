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
let frameY = 0;
let gameFrame = 0;
const staggreFrames = 5;

function animate(){
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    let position = Math.floor(gameFrame / staggreFrames) % 6; // di ko gets
    frameX = spriteWidth * position; // di ko gets 
    ctx.drawImage(playerImage, frameX, frameY, 575, 523, 0, 0, spriteWidth, spriteWidth); 

    gameFrame++;
    requestAnimationFrame(animate);
}

animate()
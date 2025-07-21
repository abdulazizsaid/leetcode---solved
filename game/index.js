const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let groundY = 660;
let onPlatform = false;

let player = {
    x: 180,
    y: groundY,
    size: 40,
    speed: 5,
    velocityY: 0,
    gravity: 0.5,
    jumpStrength: -10,
    isJumping: false
};

let platforms = [
    { x: 100, y: 600, width: 200, height: 10 },
    { x: 400, y: 500, width: 150, height: 20 },
    { x: 500, y: 400, width: 150, height: 20 },
    { x: 800, y: 300, width: 150, height: 20 },
];


let keys = {};

document.addEventListener('keydown', (e) => {
    keys[e.key] = true;

    // Sakrash uchun:
    if ((e.key === 'ArrowUp' || e.key === ' ') && !player.isJumping) {
        player.velocityY = player.jumpStrength;
        player.isJumping = true;
    }
});

document.addEventListener('keyup', (e) => {
    keys[e.key] = false;
});

function update() {
    for (let plat of platforms) {
        let playerBottom = player.y + player.size;
        let platformTop = plat.y;
        let playerRight = player.x + player.size;
        let playerLeft = player.x;

        let platformLeft = plat.x;
        let platformRight = plat.x + plat.width;

        // Agar o‘yinchi platformaning ustida bo‘lsa:
        if (
            playerBottom >= platformTop &&
            // playerBottom <= platformTop + 10 &&
            playerRight > platformLeft &&
            playerLeft < platformRight &&
            player.velocityY >= 0
        ) {
            player.y = platformTop - player.size;
            player.velocityY = 0;
            player.isJumping = false;
            onPlatform = true;
            break;
        }
    }

    // Agar hech qayerga tegmayotgan bo‘lsa – yer yoki platforma emas
    if (!onPlatform && player.y < groundY) {
        player.isJumping = true;
    }

    // Harakat
    if (keys['a']) player.x -= player.speed;
    if (keys['d']) player.x += player.speed;

    // Gravitatsiya va sakrashdwad
    player.y += player.velocityY;
    player.velocityY += player.gravity;

    // Yerga tushganini tekshirish
    if (player.y >= groundY) {
        player.y = groundY;
        player.velocityY = 0;
        player.isJumping = false;
    }
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    /// Platformalarni chiz
    for (let plat of platforms) {
        ctx.fillStyle = 'gray';
        ctx.fillRect(plat.x, plat.y, plat.width, plat.height);
    }

    // Player
    ctx.fillStyle = 'blue';
    ctx.fillRect(player.x, player.y + 10, player.size, player.size);
}

function loop() {
    update();
    draw();
    requestAnimationFrame(loop);
}

// setInterval(() => {
//     if(!player.isJumping) {
//         player.velocityY = player.jumpStrength;
//         player.isJumping = true;
//     }
// }, 1000)

loop();

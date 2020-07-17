import { Ball, drawMessage } from './ball.js';

let msg = decodeURIComponent(location.href.split("msg=")[1]);
if (!msg) msg = "N予備校最高だ！";

export const SCREEN_W = window.innerWidth - 40;
export const SCREEN_H = window.innerHeight - 40;

const canvas = document.querySelector("canvas");
canvas.width = SCREEN_W;
canvas.height = SCREEN_H;
canvas.style.backgroundColor = "gray";

export const ctx = canvas.getContext("2d");

const balls = [];
for (let i = 0; i < 100; i++) {
	balls.push(new Ball());
}

function mainLoop() {
	ctx.clearRect(0, 0, SCREEN_W, SCREEN_H);

	drawMessage(msg);

	balls.forEach(ball => {
		ball.update();
		ball.draw();
	});

	window.requestAnimationFrame(mainLoop);
}
mainLoop();
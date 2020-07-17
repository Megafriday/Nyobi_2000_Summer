import { ctx, SCREEN_W, SCREEN_H } from './result.js';

function randomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function drawMessage(message) {
	ctx.font = 'bold 100pt sans-serif';
	ctx.fillStyle = `rgb(${randomInt(100, 255)}, ${randomInt(100, 255)}, ${randomInt(100, 255)})`;
	ctx.fillText(message, 150, SCREEN_H / 2, 1000);
}

export class Ball {
	constructor() {
		this.x = SCREEN_W / 2;
		this.y = SCREEN_H / 2;
		this.vx = randomInt(-5, 5);
		this.vy = randomInt(-5, 5);
		this.size = 10;
		this.color = `rgb(${randomInt(100, 255)}, ${randomInt(100, 255)}, ${randomInt(100, 255)} )`;
	}
	update() {
		this.x += this.vx;
		this.y += this.vy;

		if (this.x < 0 || SCREEN_W <= this.x + this.size) this.vx *= -1;
		if (this.y < 0 || SCREEN_H <= this.y + this.size) this.vy *= -1;
	}
	draw() {
		ctx.fillStyle = this.color;
		ctx.fillRect(this.x, this.y, this.size, this.size);
	}
}
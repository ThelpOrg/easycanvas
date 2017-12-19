//easy-canvas was created by Thelp Corp.

let canvas;
let context;

function setCanvas(canvas, width, height) {
	canv = canvas
	canv.width = width;
	canv.height = height;
	context = canv.getContext("2d");
}

function circle(x, y, r, fill, stroke) {
	if (fill !== 0) {
		context.fillStyle = fill;
	}
	if (stroke !== 0) {
		context.strokeStyle = stroke;
	}

	context.beginPath();
	context.arc(x, y, r, 0, Math.PI * 2, false);

	if (fill !== 0) {
		context.fill();
	}
	if (stroke !== 0) {
		context.stroke();
	}
}

function rect(x, y, w, h, fill, stroke) {
	if (fill !== 0) {
		context.fillStyle = fill;
	}
	if (stroke !== 0) {
		context.strokeStyle = stroke;
	}

	context.beginPath();

	if (fill !== 0) {
		context.fillRect(x, y, w, h);
	}
	if (stroke !== 0) {
		context.strokeRect(x, y, w, h);
	}
}

function line(x1, y1, x2, y2, color) {

	context.beginPath();
	context.strokeStyle = color;
	context.moveTo(x1, y1);
	context.lineTo(x2, y2);
	context.stroke();
}

function background(color) {
	context.fillStyle = color;
	context.fillRect(0, 0, canv.width, canv.height);
	context.fill();
}

function Vector(x, y) {
	this.x = x;
	this.y = y;

	this.add = function (vector) {
		let tx, ty;
		tx = vector.x;
		ty = vector.y;
		this.x += tx;
		this.y += ty;
	}

	this.dist = function (vector) {
		let dx = vector.x - this.x;
		let dy = vector.y - this.y;

		return new Vector(dx, dy);
	}
}
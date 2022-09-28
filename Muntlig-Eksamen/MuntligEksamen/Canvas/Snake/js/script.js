window.addEventListener("keydown", sjekkKnapp);
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var storrelse = 20;
var tail = 5;
var trail = [];
var xFart = 0;
var yFart = 0;

class Slange {
    constructor(x, y, xFart, yFart) {
        this.x = x;
        this.y = y;
        this.xFart = xFart;
        this.yFart = yFart;
    }

    flytt() {
        this.x += this.xFart;
        this.y += this.yFart;        
    }

    tegn() {
        ctx.beginPath();
        ctx.fillStyle = "black";
        ctx.fillRect(this.x, this.y, storrelse, storrelse);
        ctx.closePath();
    }
}

function sjekkKnapp(e) {
    switch(e.keyCode) {
        case 37:
            slange.xFart = -20; slange.yFart = 0;
            break;
        case 38:
            slange.xFart = 0; slange.yFart = -20;
            break;
        case 39:
            slange.xFart = 20; slange.yFart = 0;
            break;
        case 40:
            slange.xFart = 0; slange.yFart = 20;
            break;
    }
}

var slange = new Slange(0, 0, xFart, yFart);

function startSpill() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    slange.flytt();
    slange.tegn();
}

setInterval(startSpill, 1000/15);
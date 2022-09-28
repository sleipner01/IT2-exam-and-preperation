window.addEventListener("keydown", keyPress);
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var x = canvas.width/2-10;
var y = canvas.height/2-10;
var xFart = 0;
var yFart = 0;

function keyPress(e) {
    if(e.keyCode === 38) {
        yFart = -1;
        xFart = 0;
    } else if(e.keyCode === 40) {
        yFart = 1;
        xFart = 0;
    } else if(e.keyCode === 37) {
        xFart = -1;
        yFart = 0;
    } else if(e.keyCode === 39) {
        xFart = 1;
        yFart = 0;
    }
}

function flyttBoks() {
    x = x + xFart;
    y = y + yFart;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.fillRect(x, y, 20, 20);
    ctx.closePath();

    if(y + 20 === canvas.height || y === 0 || x + 20 === canvas.width || x === 0) {
        cancelAnimationFrame(flyttBoks);
        alert("du suger");
    } else {
        requestAnimationFrame(flyttBoks);
    }
}
requestAnimationFrame(flyttBoks);
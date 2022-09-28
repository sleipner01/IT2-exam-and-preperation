"use strict"
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

class Ball {
    constructor(x, y, r, xFart, yFart) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.xFart = xFart;
        this.yFart = yFart;
    }

    tegn() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, 2*Math.PI);
        ctx.strokeStyle = "red";
        ctx.stroke();
        ctx.fillStyle = "red";
        ctx.fill();
        ctx.closePath();  
    }

    flytt() {
        this.x += this.xFart;
        this.y += this.yFart;

        if(this.y + this.r > canvas.height) {
            this.y = canvas.height - this.r;
            this.yFart = -this.yFart;
        } else if(this.y - this.r < 0) {
            this.y = 0 + this.r;
            this.yFart = -this.yFart;
        } else if(this.x + this.r > canvas.width) {
            this.x = canvas.width - this.r;
            this.xFart = -this.xFart;
        } else if(this.x - this.r < 0) {
            this.x = 0 + this.r;
            this.xFart = -this.xFart;
        }
        
    }
    
    finnAvstand() {
        for(var b = 0; b < baller.length; b++) {
            if(baller[b] != this) {
                var xAvstand = Math.pow(baller[b].x - this.x, 2);
                var yAvstand = Math.pow(baller[b].y - this.y, 2);
                var avstand = Math.sqrt(xAvstand + yAvstand);
            }
            if(avstand < baller[b].r + this.r) {
                //Kokt kode fra Philip. Når tre baller krasjer så forsvinner de?
                var d = (baller[b].x - this.x)*(baller[b].x - this.x) + (baller[b].y - this.y)*(baller[b].y - this.y);
                var e = (baller[b].xFart - this.xFart)*(baller[b].x - this.x) + (baller[b].yFart - this.yFart)*(baller[b].y - this.y);

                var dxv1 = (baller[b].x - this.x)*e/d;
                var dyv1 = (baller[b].y - this.y)*e/d;
                var dxv2 = (this.x - baller[b].x)*e/d;
                var dyv2 = (this.y - baller[b].y)*e/d;

                this.xFart = this.xFart + dxv1;
                this.yFart = this.yFart + dyv1; 
                baller[b].xFart = baller[b].xFart + dxv2;
                baller[b].yFart = baller[b].yFart + dyv2;

                //Kanskje lurt å flytte ballene til kanten av hverandre?
                /*
                if(this.x > baller[b].x) {
                    this.x = (this.x + baller[b].x)/2 + this.r;
                    baller[b].x = (this.x + baller[b].x)/2 - this.r;
                } else if(this.x > baller[b].x) {
                    this.x = (this.x + baller[b].x)/2 - this.r;
                    baller[b].x = (this.x + baller[b].x)/2 + this.r;
                } else if(this.y > baller[b].y) {
                    this.y = (this.y + baller[b].y)/2 + this.r;
                    baller[b].y = (this.y + baller[b].y)/2 - this.r;
                } else if(this.y < baller[b].y) {
                    this.y = (this.y + baller[b].y)/2 - this.r;
                    baller[b].y = (this.y + baller[b].y)/2 + this.r;
                }
               console.log(this.x, this.y);
               */
               
            }
        }
    }
}

var antallBaller = 10;
var radius = 20;

var baller = [];

for(var i = 0; i < antallBaller; i++) {
    var xPosisjon = Math.floor(Math.random()*canvas.width - 2*radius) + radius;
    var yPosisjon = Math.floor(Math.random()*canvas.height - 2*radius) + radius;
    var xFart = Math.floor(Math.random() * 1 + 2) - 1;
    var yFart = Math.floor(Math.random() * 5 + 2) - 1;

    var ball = new Ball(xPosisjon, yPosisjon, radius, xFart, yFart);
    baller.push(ball);
}

function start() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for(var i = 0; i < baller.length; i++) {
        baller[i].flytt();
        baller[i].finnAvstand();
        baller[i].tegn();
    }
    requestAnimationFrame(start);
}
requestAnimationFrame(start);
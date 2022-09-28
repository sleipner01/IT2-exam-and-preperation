var spEl = document.getElementById("sp");
spEl.addEventListener("click", vis);
var miljopartietEl = document.getElementById("miljopartiet");
miljopartietEl.addEventListener("click", vis);
var videoEl = document.getElementById("video");
var bildegalleriEl = document.getElementById("bildegalleri");
var pianoLyd = document.getElementById("piano");

var bildenummer = 0;
var interval = setInterval(byttBilde, 2000);

function vis(e) {
    console.log(e.target.id);
    if(e.target.id === "sp") {
        clearInterval(interval);
        videoEl.innerHTML = "<video controls width='320' height='180'><source src='../vedleggsfiler_h17/senterpartiet2.mp4' type='video/mp4'></video>";
        bildegalleriEl.style.display = "none";
        pianoLyd.pause();
    }
    if(e.target.id === "miljopartiet") {
        clearInterval(interval);
        videoEl.innerHTML = "";
        bildegalleriEl.style.display = "initial";
        pianoLyd.play();
        byttBilde();
        interval = setInterval(byttBilde, 2000);
    }
}

function byttBilde() {
    bildenummer++;
    if(bildenummer > 3) {
        bildenummer = 1;
    }
    bildegalleriEl.innerHTML = "<img src='../vedleggsfiler_h17/bildegalleri0" + bildenummer + ".jpg' alt='bildegalleri0" + bildenummer + "'>";
}
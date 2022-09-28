//Henter inn elementer fra HTML dokumentet
var bildeEl = document.getElementById("bilde");
    bildeEl.addEventListener("click", sjekkPunkt);
var lydfilEl = document.getElementById("lydfil");
var muskelEl = document.getElementById("muskel");

//Definerer variabler for bruk i funksjonene
var muskel;
var muskelLydFil;

//Sjekker hvor muspekeren klikker på bildet.
function sjekkPunkt(e) {
    posX = e.clientX - e.target.offsetLeft;
    posY = e.clientY - e.target.offsetTop;
    console.log(posX, posY);

    if(posX > 247 && posX < 303 && posY > 108 && posY < 130) {
        console.log(posX, posY, "Armstrekkeren");
        muskel = "Armstrekkeren";
        muskelLydFil = "armstrekkeren-redigert.mp3"; 
        visInfo(); //Legger til nødvendig informasjon i variabler for å finne fram lydfilen, og navnet på muskelen
    }
    if(posX > 204 && posX < 242 && posY > 132 && posY < 196) {
        console.log(posX, posY, "Den Brede Ryggmuskelen");
        muskel = "Den brede ryggmuskelen";
        muskelLydFil = "brede_ryggmuskel.mp3";
        visInfo();
    }
    /*Svakheten med denne koden er at musklikk-beregneren ikke tar høyde for "scroll" på nettsiden. Det skaper problemer
    når man lager design ut ifra en maskin med høy skjermoppløsning ettersom nettsiden skaleres og flytter på DOM elementer.
    Det gjør at muspekeren ikke klikker innenfor områdene jeg har angitt for "Armstrekkeren" og "Den brede ryggmuskelen".
    Siden jeg har laget designet på en maskin med dårlig skjermoppløsning, burde dette gå fint.*/
}

//Funksjon for å vise navnet på muskelen og spille av lydfilene.
//Foreløpig kjøres bare animasjonen første gang man trykker på en muskelgruppe
function visInfo() {
    muskelEl.style.animationPlayState = "paused";
    lydfilEl.src = "media/" + muskelLydFil;
    lydfilEl.play();
    muskelEl.innerHTML = muskel;
    console.log(muskel);
    muskelEl.style.animationPlayState = "running";
}
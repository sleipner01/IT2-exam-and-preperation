var fjell1El = document.getElementById("fjell1");
    fjell1El.addEventListener("click", sjekkFil); 
var fjell2El = document.getElementById("fjell2");
    fjell2El.addEventListener("click", sjekkFil);
var fjell3El = document.getElementById("fjell3");
    fjell3El.addEventListener("click", sjekkFil);

var filformatBegrunnelseEl = document.getElementById("filformatBegrunnelse");
var datagrafikkEl = document.getElementById("datagrafikk");

function sjekkFil(e) {
    if(e.target.id === "fjell1") {
        filformatBegrunnelseEl.innerHTML = "Bildet du trykket på er et .jpg bilde. " +
                                            "JPG/JPEG er særlig brukt innen foto for at bildet som lagres ikke skal ta for mye plass. " + 
                                            "JPG/JPEG er en 'lossy' komprimeringsmåte som gjør at bildet mister kvalitet. Man kan velge graden av komprimering når man lagrer bildet.";
        datagrafikkEl.innerHTML = "Denne filtypen brukes ofte når enkeltpersoner lagrer flere fotografier på datamaskinen eller harddisken sin." +
                                  "JPG/JPEG bilder brukes ofte på nettsider (Da med hard komprimering for å minimere data) eller til utprinting av bilder."
    } else if(e.target.id === "fjell2") {
        filformatBegrunnelseEl.innerHTML = "Bildet du trykket på er et .png bilde." + 
                                           " PNG bilder er særlig brukt innen grafikk for å bevare kvaliteten til bildet, og funksjonen med at man kan få gjennomsiktig bakgrunn." +
                                           " Det egner seg godt på nettsider siden man kan få bildet til å se dynamisk ut og passe godt til siden uten en annen farget bakgrunn" + 
                                           " PNG brukes også til animasjoner for samme effekt, der f.eks en bil kan bevege seg gjennom en annen bagrunn.";
        datagrafikkEl.innerHTML = "Denne filtypen egner seg godt til design på nettsider, og til animasjoner.";
    } else if(e.target.id === "fjell3") {
        filformatBegrunnelseEl.innerHTML = "Bildet du trykket på er et .png bilde." + 
                                           " Bildet er en logo laget til bruk på store reklameskilt. For å få optimal kvalitet egner det seg å ha en filtype som ikke påvirker kvaliteten." + 
                                           " I tillegg får man muligheten til å ha gjennomsiktig bakgrunn som kan være praktisk i mange tilfeller." +
                                           " Samme bilde kan brukes i 'tab'-feltet på nettlesere for å vise logoen. I dette tilfelle kan .ico også benyttes.";
        datagrafikkEl.innerHTML = "Brukes til store reklameskilt og postere." + 
                                  " Kan benyttes i nettlesere og.";
    }
}
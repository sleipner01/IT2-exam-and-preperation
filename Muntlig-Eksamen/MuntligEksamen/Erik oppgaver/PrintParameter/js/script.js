var bodyEl = document.getElementsByTagName("body");
var inputEl = document.getElementById("input");
var knappEl = document.getElementById("knapp");
    knappEl.addEventListener("click", print);

function print() {
    var input = document.createElement("p");
    input.innerHTML = inputEl.value;
    bodyEl[0].appendChild(input);
    inputEl.innerHTML = "";
}
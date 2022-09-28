function finnPalindromiskTall() {
    var storst = 0;

    for(var i = 100; i < 1000; i++){
        for(var j = 100; j < 1000; j++) {
            var tall = i * j;
            tall = tall.toString();

            if(tall[0] === tall[5] && tall[1] === tall[4] && tall[2] === tall[3]) {
                if(tall > storst) {
                    storst = tall;
                }  
            }
        }
    }
    console.log(Number(storst));
}
finnPalindromiskTall();


var stor = 0;
for(var i = 999; i > 99; i--){
    for(var j = 999; j > 99; j--){
        if(j*i === Number(String(j*i).split("").reverse().join(""))){
            if(j*i > stor) {
                stor = j*i;
            }
        }
    }
}
console.log(stor);
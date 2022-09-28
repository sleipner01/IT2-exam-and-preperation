var array = [];

for(var i = 0; i < 20; i++) {
    array.push(Math.floor(Math.random()*20)+1);
}
for(var i = 0; i < array.length; i++) {
    console.log(array[i]);
}
console.log("Større enn 15");
for(var i = 0; i < array.length; i++) {
    if(array[i] > 15) {
        console.log(array[i]);
    }
}

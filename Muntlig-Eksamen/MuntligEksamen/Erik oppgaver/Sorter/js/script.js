var array = [];

for(var i = 0; i < 10; i++) {
    array.push(Math.floor(Math.random()*10));
}

function sort(a, b) {
    return a - b;
}

console.log(array.sort(sort));
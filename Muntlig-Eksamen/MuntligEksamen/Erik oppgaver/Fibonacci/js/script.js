function fibonacci() {
    var fib = [];

    for(var i = 0; i < 20; i++) {
        if(fib.length <= 2) {
            fib.push(i);
        } else if(fib.length > 2) {
            fib.push(fib[i-2] + fib[i-1]);
        }
    }
    console.log(fib);
    console.log("____");
    
}
fibonacci();
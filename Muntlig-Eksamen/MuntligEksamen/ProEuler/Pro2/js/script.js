function partallFibonacci() {
    var fib = [];
    var evenFib = [];
    var sum = 0;

    for(var i = 0; i < 100; i++) {
        if(fib.length <= 2) {
            fib.push(i);
        } else if(fib.length > 2) {
            fib.push(fib[i-2] + fib[i-1]);
            if(fib[i] >= 4000000){
                break;
            } else {
                if(fib[i]%2 === 0) {
                evenFib.push(fib[i]);
                }
            }
        }
    }
    for(var i = 0; i < evenFib.length; i++) {
        sum += evenFib[i];
    }
    console.log(sum);
}
partallFibonacci();
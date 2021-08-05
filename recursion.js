// 1 + 2 + 3 ..... +n
// sum 

// let total = 0;
// let n = 3;
// for (let i = 0; i <= n; i++) {
//     total = total + i;
    
// }
// console.log(total);


// f(n) = n + f(n-1)

function sum(n) {
    if (n == 0) {
        return 0;
    }
    else {
        return n * (n - 1);
    }
}

console.log(sum(15));
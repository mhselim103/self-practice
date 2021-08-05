/*
function x(n) {
    return n * y(n - 1); 
}
function y(n) {
    return n * z(n - 1);
}
function z(n) {
    return n; 
}

console.log(x(3));

*/

// recursion       
// call thyself

function x(n) {
    if (n == 1) {
        return 1;
    }
    return n * x(n - 1);
}



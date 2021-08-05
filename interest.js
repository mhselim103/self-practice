
// interest
// 10, 000(1 + 0.1 * 6)

function interest(m) {
    let y = 10;
    let p = 0.1;
    let interest = ((m * (1 + 0.1)) * y - m);
    console.log(interest);
}

interest(150000);
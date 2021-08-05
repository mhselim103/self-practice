
/*
function fullName(first, last, gender) {
    if (gender == "male") {
        let output = "Mr. " + first + " " + last;
        return output;
    }
    else {
        let output = "Mrs " + first + " "  + last;
        return output;
    }
}
let output = fullName("Mahmudul", "Hasan", "male");
console.log(output);


*/


function fullName(first, last, gender) {
    let output;
    if (gender == "male") {
        output = "Mr. " + first + " " + last;
       
    }
    else {
        output = "Mrs " + first + " "  + last;
        
    }
    return output;
}
// fullName("Mahmudul", "Hasan", "male");
// console.log(fullName("Mahmudul", "Hasan", "male"));
let output = fullName("Mahmudul", "Hasan", "male");
console.log(output);





function grade(mark) {
    
    if (mark >= 33 && mark <= 39) {
        return "gpa-1.00";
    }
    else if (mark >= 40 && mark <= 49) {
        return "gpa-2.0";
    }
    else if (mark >= 50 && mark <= 59) {
        return "gpa-3.0";
    }
    else if (mark >= 60 && mark <= 69) {
        return "gpa-3.5";
    }
    else if (mark >= 70 && mark <= 79) {
        return "gpa-4.00";
    }
    else if (mark >=80 && mark <= 100) {
        return "gpa-5.00" ;
        
    }

    else {
        return "fail";
    }
}
mark = 80;
let gpa = grade(mark);
console.log(gpa);
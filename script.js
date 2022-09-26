let f1 = document.querySelector(".f-1");

function one() {
    console.log("work");
}



one();

f1.onclick = one;//без круглых скобок


console.log(1 + one());

console.log(one());//underfined



function two() {
    console.log("work 3333");
    return 54;
}


two();

console.log(6 + two());



let a = 6;
let b = 7;

function multi() {
    console.log(a * b);
    return a * b;
}

let c1 = multi();
let c2 = 10 * multi();
console.log(c1, c2);


function multi2(x, y) {
    return x * y;
    // После код работать не будет
}

console.log(multi2(5, 4));
console.log(multi2(6, 6));
console.log(multi2(6, a));


document.querySelector(".f-2").onclick = function () {
    console.log("++++++++++");
}
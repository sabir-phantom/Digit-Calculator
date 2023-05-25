// To print something 
// console.log("welcome")

// Variable declare
let fname = "Ektider Evan"
let age = 25
let isMarried = true
let hobbies = ["cricket","painting","kanamachi"]

// console.log(fname)
// console.log(age)
// console.log(isMarried)
// console.log(hobbies)

// console.log(hobbies[0])
// console.log(hobbies[1])
// console.log(hobbies[2])

// hobbies[0] = "football"

// console.log(hobbies[0])
// console.log(hobbies)

// console.log(typeof(isMarried))


let num1 = document.getElementById("num1")
let num2 = document.getElementById("num2")
let result = document.getElementById("result")
let result1 = document.getElementById("result1")

// let sumBtn = document.getElementById("sum")
// let subBtn = document.getElementById("sub")
// let mulBtn = document.getElementById("mul")
// let diviBtn = document.getElementById("divi")

function print(){
    let a = parseInt(num1.value)
    let sum = 0;
    while (a) {
        sum += a % 10;
        a = Math.floor(a / 10);
    }
    num2.value = sum
}

function sum(){
    let a = parseInt(num1.value)
    let b = parseInt(num2.value)
    let sum = a + b
    result.value = sum // input a value set
    result1.innerHTML = sum // onno jekono jaygay
}

function sub(){
    let a = parseInt(num1.value)
    let b = parseInt(num2.value)
    let sum = a - b
    result.value = sum // input a value set
    result1.innerHTML = sum // onno jekono jaygay
}

function mul(){
    let a = parseInt(num1.value)
    let b = parseInt(num2.value)
    let sum = a * b
    result.value = sum // input a value set
    result1.innerHTML = sum // onno jekono jaygay
}
function divi(){
    let a = parseInt(num1.value)
    let b = parseInt(num2.value)
    let sum = a / b
    result.value = sum // input a value set
    result1.innerHTML = sum // onno jekono jaygay
}

// clear button
let btn = document.getElementById('clear-btn');

btn.addEventListener('click', function(){
    // clearing input field
    result.value = '';
    num1.value = '';
    num2.value = '';

    // clearing other elements
    result1.innerText = "";
})



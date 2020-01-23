"use strict";

//Global vars
var output = document.getElementById("output");
var instructions = document.getElementById("instructions");
instructions.innerHTML = "Type each number you would like parsed in the boxes below";
var answer = "";
var flag = false;

var num1 = document.getElementById("first");
var num2 = document.getElementById("second");
var num3 = document.getElementById("third");
var num4 = document.getElementById("forth");
var num5 = document.getElementById("fifth");
var num6 = document.getElementById("sixth");


function mean(){
    if(flag === true){
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);
        num3 = parseFloat(num3);
        num4 = parseFloat(num4);
        num5 = parseFloat(num5);
        num6 = parseFloat(num6);
        console.log("this is num1: " + num1); //debug line for num 1 var
        console.log("this is num2: " + num2); //debug line for num 2 var
        console.log("this is num3: " + num3); //debug line for num 3 var
        console.log("this is num4: " + num4); //debug line for num 4 var
        console.log("this is num5: " + num5); //debug line for num 5 var
        console.log("this is num6: " + num6); //debug line for num 6 var
    }
    else if(flag === false){
        num1 = parseFloat(num1.value);
        num2 = parseFloat(num2.value);
        num3 = parseFloat(num3.value);
        num4 = parseFloat(num4.value);
        num5 = parseFloat(num5.value);
        num6 = parseFloat(num6.value);
        console.log("this is num1: " + num1); //debug line for num 1 var
        console.log("this is num2: " + num2); //debug line for num 2 var
        console.log("this is num3: " + num3); //debug line for num 3 var
        console.log("this is num4: " + num4); //debug line for num 4 var
        console.log("this is num5: " + num5); //debug line for num 5 var
        console.log("this is num6: " + num6); //debug line for num 6 var
    }

    var sum = num1 + num2 + num3 + num4 + num5 + num6;

    console.log("this is num1: " + num1); //debug line for num 1 var
    console.log("this is num2: " + num2); //debug line for num 2 var
    console.log("this is num3: " + num3); //debug line for num 3 var
    console.log("this is num4: " + num4); //debug line for num 4 var
    console.log("this is num5: " + num5); //debug line for num 5 var
    console.log("this is num6: " + num6); //debug line for num 6 var
    console.log("this is sum: " + sum); //debug line for sum var

    var count = 6;
    console.log("this is count: " + count); //debug line for count var

    answer = sum/count;
    console.log("this is answer: " + answer); //debug line for answer var
    output.innerHTML = answer;
    flag = true
    return answer;
}

function largestNumber(){
    if(flag === true){
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);
        num3 = parseFloat(num3);
        num4 = parseFloat(num4);
        num5 = parseFloat(num5);
        num6 = parseFloat(num6);
        console.log("this is num1: " + num1); //debug line for num 1 var
        console.log("this is num2: " + num2); //debug line for num 2 var
        console.log("this is num3: " + num3); //debug line for num 3 var
        console.log("this is num4: " + num4); //debug line for num 4 var
        console.log("this is num5: " + num5); //debug line for num 5 var
        console.log("this is num6: " + num6); //debug line for num 6 var
    }
    else if(flag === false){
        num1 = parseFloat(num1.value);
        num2 = parseFloat(num2.value);
        num3 = parseFloat(num3.value);
        num4 = parseFloat(num4.value);
        num5 = parseFloat(num5.value);
        num6 = parseFloat(num6.value);
        console.log("this is num1: " + num1); //debug line for num 1 var
        console.log("this is num2: " + num2); //debug line for num 2 var
        console.log("this is num3: " + num3); //debug line for num 3 var
        console.log("this is num4: " + num4); //debug line for num 4 var
        console.log("this is num5: " + num5); //debug line for num 5 var
        console.log("this is num6: " + num6); //debug line for num 6 var
    }

    if(num1 > num2 && num1 > num3 && num1 > num4 && num1 > num5 && num1 > num6){
        output.innerHTML = num1;
        flag = true;
    }
    else if(num2 > num1 && num2 > num3 && num2 > num4 && num2 > num5 && num2 > num6){
        output.innerHTML = num2;
        flag = true;
    }
    else if(num3 > num1 && num3 > num2 && num3 > num4 && num3 > num5 && num3 > num6){
        output.innerHTML = num3;
        flag = true;
    }
    else if(num4 > num1 && num4 > num2 && num4 > num3 && num4 > num5 && num4 > num6){
        output.innerHTML = num4;
        flag = true;
    }
    else if(num5 > num1 && num5 > num2 && num5 > num3 && num5 > num4 && num5 > num6){
        output.innerHTML = num5;
        flag = true;
    }
    else if(num6 > num1 && num6 > num2 && num6 > num3 && num6 > num4 && num6 > num5){
        output.innerHTML = num6;
        flag = true;
    }
    else{
        output.innerHTML = "One or more numbers is equal to another number";
        flag = true;
    }
    return true;
}
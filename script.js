"use strict";

//Global vars
var output = document.getElementById("output");
var instructions = document.getElementById("instructions");
instructions.innerHTML = "Type each number you would like parsed in the boxes below";
var answer = "";
var flag = false;




function getNumbers(){
    var num1 = document.getElementById("first");
    var num2 = document.getElementById("second");
    var num3 = document.getElementById("third");
    var num4 = document.getElementById("forth");
    var num5 = document.getElementById("fifth");
    var num6 = document.getElementById("sixth");

    // num2 = parseFloat(num2.value);
    // num3 = parseFloat(num3.value);
    // num4 = parseFloat(num4.value);
    // num5 = parseFloat(num5.value);
    // num6 = parseFloat(num6.value);
    

    let myNumbers = {
        number1:parseFloat(num1.value || num1),
        number2:parseFloat(num2.value || num2),
        number3:parseFloat(num3.value || num3),
        number4:parseFloat(num4.value || num4),
        number5:parseFloat(num5.value || num5),
        number6:parseFloat(num6.value || num6),
    }
    console.log("this are numbers: ",myNumbers); //debug line for num 1 var
    return myNumbers;
}

function mean(){

    var myNumbers = getNumbers();

    answer = "";
    var sum = myNumbers.number1 + myNumbers.number2 + myNumbers.number3+ myNumbers.number4 + myNumbers.number5 + myNumbers.number6;

    // console.log("this is num1: " + num1); //debug line for num 1 var
    // console.log("this is num2: " + num2); //debug line for num 2 var
    // console.log("this is num3: " + num3); //debug line for num 3 var
    // console.log("this is num4: " + num4); //debug line for num 4 var
    // console.log("this is num5: " + num5); //debug line for num 5 var
    // console.log("this is num6: " + num6); //debug line for num 6 var
    

    var count = 6;
    // console.log("this is count: " + count); //debug line for count var

    answer = sum/count;
    // console.log("this is answer: " + answer); //debug line for answer var
    output.innerHTML = answer;
    console.log("this is sum: ",{"sum":sum, "count":count, "answer":answer}); //debug line for some vars
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
    answer = "";
    answer = Math.max(num1, num2, num3, num4, num5, num6);
    console.log("this is answer: " + answer); //debug line for answer var
    flag = true;
    output.innerHTML = answer;

    return answer;
}

function smallestNumber(){
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
    answer = "";
    answer = Math.min(num1, num2, num3, num4, num5, num6);
    console.log("this is answer: " + answer); //debug line for answer var
    flag = true;
    output.innerHTML = answer;

    return answer;
}

function range(){
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
    answer = "";
    var minVal = Math.min(num1, num2, num3, num4, num5, num6);
    console.log("this is minVal: " + minVal); //debug line for minVal var
    var maxVal = Math.max(num1, num2, num3, num4, num5, num6);
    console.log("this is maxVal: " + maxVal); //debug line for maxVal var

    answer = maxVal - minVal;
    console.log("this is answer: " + answer); //debug line for answer var
    flag = true;
    output.innerHTML = answer;

    return answer;
}

function unique(){
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
    answer = "";
    
    if(num1 !== num2 && num1 !== num3 && num1 !== num4 && num1 !== num5 && num1 !== num6){
        answer = num1 + ", ";
    }
    if(num2 !== num1 && num2 !== num3 && num2 !== num4 && num2 !== num5 && num2 !== num6){
        answer += num2 + ", ";
    }
    if(num3 !== num1 && num3 !== num2 && num3 !== num4 && num3 !== num5 && num3 !== num6){
        answer += num3 + ", ";
    }
    if(num4 !== num1 && num4 !== num2 && num4 !== num3 && num4 !== num5 && num4 !== num6){
        answer += num4 + ", ";
    }
    if(num5 !== num1 && num5 !== num2 && num5 !== num3 && num5 !== num4 && num5 !== num6){
        answer += num5 + ", ";
    }
    if(num6 !== num1 && num6 !== num2 && num6 !== num3 && num6 !== num4 && num6 !== num5){
        answer += num6 + ", ";
    }
    else{
        answer = "No Unique Numbers";
    }
    // var comma = ',';
    answer = answer.replace(',', "");
    console.log("this is answer: " + answer); //debug line for answer var
    flag = true;
    output.innerHTML = answer;

    let test = "12345,00";
    test = test.replace(',', ""); 
    console.log(test);


    return answer;
}
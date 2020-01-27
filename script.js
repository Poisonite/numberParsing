"use strict";

//Global vars
var output = document.getElementById("output");
var instructions = document.getElementById("instructions");
var answer = "";
var flag = false;

instructions.innerHTML = "Type each number you would like parsed in the boxes below"; // this sets the text in the instructions box and also allows it to be changed in later functions

function getNumbers() {
    //This pulls the "shorthand" way of pointing to each box so that the info in the myNumbers var isn't super long
    var num1 = document.getElementById("first");
    var num2 = document.getElementById("second");
    var num3 = document.getElementById("third");
    var num4 = document.getElementById("forth");
    var num5 = document.getElementById("fifth");
    var num6 = document.getElementById("sixth");

    //This is how you pass multiple bits of data through an object so that a single object can by returned out of the function and the data in it is individually reachable
    //by saying let we are allowing the variable declared below to assign itself the data within this object while also running the other code so that the data here is valid
    let myNumbers = {
        number1: parseFloat(num1.value || num1), // Call using: myNumbers.number1 (myNumbers declares the object to search in and number1 is the desired object from within that object which serves as a box for our number data)
        number2: parseFloat(num2.value || num2), // The/pipeline operator here says to grab the .value from the html box if valid and if not to just pull the value of the appropiate number, this 
        number3: parseFloat(num3.value || num3), // replaces the if logic which was previously used  to allow multiple run instancces
        number4: parseFloat(num4.value || num4), // the numbers within the object exist as properties of that object which can be defined and interpertated individually
        number5: parseFloat(num5.value || num5),
        number6: parseFloat(num6.value || num6),
    }
    //By using a comma instead of a plus to concatanite the string and the object it's possible to have all the data in the object displayed rather than displaying the fact that an object exists
    console.log("Numbers contained in myNumbers object: ", myNumbers); //debug line for all the numbers that were encased in the myNumbers object
    return myNumbers; //returns the object so that it can be called in other functions
}

function mean() {

    //declares the myNumbers var which we assign data to when the getNumbers function is called 
    var myNumbers = getNumbers();
    var validData = true; // this var is used later so that any empty boxes are caught
    answer = "";//Resets the answer var so that only the new answer is displayed

    var sum = myNumbers.number1 + myNumbers.number2 + myNumbers.number3 + myNumbers.number4 + myNumbers.number5 + myNumbers.number6; //See line 25 comment for how this works
    var count = 6;
    answer = sum / count;

    // sets the valid data flag to false if any box is left empty
    if (isNaN(myNumbers.number1) === true || isNaN(myNumbers.number2) === true || isNaN(myNumbers.number3) === true || isNaN(myNumbers.number4) === true || isNaN(myNumbers.number5) === true || isNaN(myNumbers.number6) === true) {
        answer = "Please fill all fields";
        validData = false;
    }

    // outputs exception handling if any box is left blank or outputs the answer if no boxes are blank
    if (validData === false) {
        output.innerHTML = answer;
        instructions.innerHTML = "Please fill all the number boxes to continue";
    }
    else if (validData === true) {
        output.innerHTML = answer;
        instructions.innerHTML = "Run more calculations with current numbers or change numbers to continue";
    }
    flag = true;
    console.log("End of Function var values: ", { "sum": sum, "count": count, "answer": answer }); //debug line for the sum, count, and answer vars in 1 line so that it's easier to comment out at the end
    return answer;
}

function largestNumber() {
    //declares the myNumbers var which we assign data to when the getNumbers function is called 
    var myNumbers = getNumbers();
    var validData = true; // this var is used later so that any empty boxes are caught
    answer = "";

    answer = Math.max(myNumbers.number1, myNumbers.number2, myNumbers.number3, myNumbers.number4, myNumbers.number5, myNumbers.number6);//calls the object and then the data within the object to calculate which number is the highest

    // sets the valid data flag to false if any box is left empty
    if (isNaN(myNumbers.number1) === true || isNaN(myNumbers.number2) === true || isNaN(myNumbers.number3) === true || isNaN(myNumbers.number4) === true || isNaN(myNumbers.number5) === true || isNaN(myNumbers.number6) === true) {
        answer = "Please fill all fields";
        validData = false;
    }

    // outputs exception handling if any box is left blank or outputs the answer if no boxes are blank
    if (validData === false) {
        output.innerHTML = answer;
        instructions.innerHTML = "Please fill all the number boxes to continue";
    }
    else if (validData === true) {
        output.innerHTML = answer;
        instructions.innerHTML = "Run more calculations with current numbers or change numbers to continue";
    }
    flag = true;
    console.log("End of Function var values: ", { "answer": answer }); //debug line for the answer var evenhough there's only 1 var here i did it this way so that the formatting in the console matches
    return answer;
}

function smallestNumber() {
    //declares the myNumbers var which we assign data to when the getNumbers function is called 
    var myNumbers = getNumbers();
    var validData = true; // this var is used later so that any empty boxes are caught
    answer = "";

    answer = Math.min(myNumbers.number1, myNumbers.number2, myNumbers.number3, myNumbers.number4, myNumbers.number5, myNumbers.number6);//calls the object and then the data within the object to calculate which number is the highest

    // sets the valid data flag to false if any box is left empty
    if (isNaN(myNumbers.number1) === true || isNaN(myNumbers.number2) === true || isNaN(myNumbers.number3) === true || isNaN(myNumbers.number4) === true || isNaN(myNumbers.number5) === true || isNaN(myNumbers.number6) === true) {
        answer = "Please fill all fields";
        validData = false;
    }

    // outputs exception handling if any box is left blank or outputs the answer if no boxes are blank
    if (validData === false) {
        output.innerHTML = answer;
        instructions.innerHTML = "Please fill all the number boxes to continue";
    }
    else if (validData === true) {
        output.innerHTML = answer;
        instructions.innerHTML = "Run more calculations with current numbers or change numbers to continue";
    }
    flag = true;
    console.log("End of Function var values: ", { "answer": answer }); //debug line for the answer var evenhough there's only 1 var here i did it this way so that the formatting in the console matches
    return answer;
}

function range() {
    //declares the myNumbers var which we assign data to when the getNumbers function is called 
    var myNumbers = getNumbers();
    var validData = true; // this var is used later so that any empty boxes are caught
    answer = "";

    var minVal = Math.min(myNumbers.number1, myNumbers.number2, myNumbers.number3, myNumbers.number4, myNumbers.number5, myNumbers.number6);//calls the object and then the data within the object to calculate which number is the highest
    // console.log("this is minVal: " + minVal); //debug line for minVal var
    var maxVal = Math.max(myNumbers.number1, myNumbers.number2, myNumbers.number3, myNumbers.number4, myNumbers.number5, myNumbers.number6);//calls the object and then the data within the object to calculate which number is the highest
    // console.log("this is maxVal: " + maxVal); //debug line for maxVal var

    answer = maxVal - minVal;
    // console.log("this is answer: " + answer); //debug line for answer var

    // sets the valid data flag to false if any box is left empty
    if (isNaN(myNumbers.number1) === true || isNaN(myNumbers.number2) === true || isNaN(myNumbers.number3) === true || isNaN(myNumbers.number4) === true || isNaN(myNumbers.number5) === true || isNaN(myNumbers.number6) === true) {
        answer = "Please fill all fields";
        validData = false;
    }

    // outputs exception handling if any box is left blank or outputs the answer if no boxes are blank
    if (validData === false) {
        output.innerHTML = answer;
        instructions.innerHTML = "Please fill all the number boxes to continue";
    }
    else if (validData === true) {
        output.innerHTML = answer;
        instructions.innerHTML = "Run more calculations with current numbers or change numbers to continue";
    }
    flag = true;
    console.log("End of Function var values: ", { "minVal": minVal, "maxVal": maxVal, "answer": answer }); //debug line for the minVal, maxVal, and answer vars in 1 line so that it's easier to comment out at the end

    return answer;
}

function unique() {
    //declares the myNumbers var which we assign data to when the getNumbers function is called 
    var myNumbers = getNumbers();
    var validData = true; // this var is used later so that any empty boxes are caught
    answer = "";

    if (myNumbers.number1 !== myNumbers.number2 && myNumbers.number1 !== myNumbers.number3 && myNumbers.number1 !== myNumbers.number4 && myNumbers.number1 !== myNumbers.number5 && myNumbers.number1 !== myNumbers.number6) {
        answer = myNumbers.number1 + " ";
    }
    if (myNumbers.number2 !== myNumbers.number1 && myNumbers.number2 !== myNumbers.number3 && myNumbers.number2 !== myNumbers.number4 && myNumbers.number2 !== myNumbers.number5 && myNumbers.number2 !== myNumbers.number6) {
        answer += myNumbers.number2 + " ";
    }
    if (myNumbers.number3 !== myNumbers.number1 && myNumbers.number3 !== myNumbers.number2 && myNumbers.number3 !== myNumbers.number4 && myNumbers.number3 !== myNumbers.number5 && myNumbers.number3 !== myNumbers.number6) {
        answer += myNumbers.number3 + " ";
    }
    if (myNumbers.number4 !== myNumbers.number1 && myNumbers.number4 !== myNumbers.number2 && myNumbers.number4 !== myNumbers.number3 && myNumbers.number4 !== myNumbers.number5 && myNumbers.number4 !== myNumbers.number6) {
        answer += myNumbers.number4 + " ";
    }
    if (myNumbers.number5 !== myNumbers.number1 && myNumbers.number5 !== myNumbers.number2 && myNumbers.number5 !== myNumbers.number3 && myNumbers.number5 !== myNumbers.number4 && myNumbers.number5 !== myNumbers.number6) {
        answer += myNumbers.number5 + " ";
    }
    if (myNumbers.number6 !== myNumbers.number1 && myNumbers.number6 !== myNumbers.number2 && myNumbers.number6 !== myNumbers.number3 && myNumbers.number6 !== myNumbers.number4 && myNumbers.number6 !== myNumbers.number5) {
        answer += myNumbers.number6 + " ";
    }

    // sets the valid data flag to false if any box is left empty
    if (isNaN(myNumbers.number1) === true || isNaN(myNumbers.number2) === true || isNaN(myNumbers.number3) === true || isNaN(myNumbers.number4) === true || isNaN(myNumbers.number5) === true || isNaN(myNumbers.number6) === true) {
        answer = "Please fill all fields";
        validData = false;
    }

    // outputs exception handling if any box is left blank or outputs the answer if no boxes are blank
    if (validData === false) {
        output.innerHTML = answer;
        instructions.innerHTML = "Please fill all the number boxes to continue";
    }
    else if (validData === true) {
        output.innerHTML = answer;
        instructions.innerHTML = "Run more calculations with current numbers or change numbers to continue";
    }
    flag = true;
    console.log("End of Function var values: ", { "validData": validData, "answer": answer }); //debug line for the validData and answer vars in 1 line so that it's easier to comment out at the end

    return answer;
}

function duplicate() {
    //declares the myNumbers var which we assign data to when the getNumbers function is called 
    var myNumbers = getNumbers();
    var validData = true; // this var is used later so that any empty boxes are caught
    var answer = "";

    //declares a var with all 6 numbers written out in a list other wise known as an array. each of these items can be removed individually from the array 
    var numArray = [myNumbers.number1, myNumbers.number2, myNumbers.number3, myNumbers.number4, myNumbers.number5, myNumbers.number6];

    // if logic to write any numbers which are the same as another number to the answer var
    if (myNumbers.number1 === myNumbers.number2 || myNumbers.number1 === myNumbers.number3 || myNumbers.number1 === myNumbers.number4 || myNumbers.number1 === myNumbers.number5 || myNumbers.number1 === myNumbers.number6) {
        answer += myNumbers.number1 + " ";
    }
    if (myNumbers.number2 === myNumbers.number1 || myNumbers.number2 === myNumbers.number3 || myNumbers.number2 === myNumbers.number4 || myNumbers.number2 === myNumbers.number5 || myNumbers.number2 === myNumbers.number6) {
        answer += myNumbers.number2 + " ";
    }
    if (myNumbers.number3 === myNumbers.number1 || myNumbers.number3 === myNumbers.number2 || myNumbers.number3 === myNumbers.number4 || myNumbers.number3 === myNumbers.number5 || myNumbers.number3 === myNumbers.number6) {
        answer += myNumbers.number3 + " ";
    }
    if (myNumbers.number4 === myNumbers.number1 || myNumbers.number4 === myNumbers.number2 || myNumbers.number4 === myNumbers.number3 || myNumbers.number4 === myNumbers.number5 || myNumbers.number4 === myNumbers.number6) {
        answer += myNumbers.number4 + " ";
    }
    if (myNumbers.number5 === myNumbers.number1 || myNumbers.number5 === myNumbers.number2 || myNumbers.number5 === myNumbers.number3 || myNumbers.number5 === myNumbers.number4 || myNumbers.number5 === myNumbers.number6) {
        answer += myNumbers.number5 + " ";
    }
    if (myNumbers.number6 === myNumbers.number1 || myNumbers.number6 === myNumbers.number2 || myNumbers.number6 === myNumbers.number3 || myNumbers.number6 === myNumbers.number4 || myNumbers.number6 === myNumbers.number5) {
        answer += myNumbers.number6 + " ";
    }
    // exception handling in case there are no duplicate numbers
    if (answer === "") {
        answer = "No duplicates were found"
    }

    // sets the valid data flag to false if any box is left empty
    if (isNaN(myNumbers.number1) === true || isNaN(myNumbers.number2) === true || isNaN(myNumbers.number3) === true || isNaN(myNumbers.number4) === true || isNaN(myNumbers.number5) === true || isNaN(myNumbers.number6) === true) {
        answer = "Please fill all fields";
        validData = false;
    }

    // outputs exception handling if any box is left blank or outputs the answer if no boxes are blank
    if (validData === false) {
        output.innerHTML = answer;
        instructions.innerHTML = "Please fill all the number boxes to continue";
    }
    else if (validData === true) {
        output.innerHTML = answer; // When the array is outputted it automatically adds commas between terms
        instructions.innerHTML = "Run more calculations with current numbers or change numbers to continue";
    }

    flag = true;
    console.log("End of Function var values: ", { "numArray": numArray, "answer": answer }); //debug line for the numArray, and answer vars in 1 line so that it's easier to comment out at the end

    return answer;
}

function orderLH() {
    //declares the myNumbers var which we assign data to when the getNumbers function is called 
    var myNumbers = getNumbers();
    var validData = true; // this var is used later so that any empty boxes are caught
    var answer = "";

    //declares a var with all 6 numbers written out in a list other wise known as an array. each of these items can be removed individually from the array 
    var numArray = [myNumbers.number1, myNumbers.number2, myNumbers.number3, myNumbers.number4, myNumbers.number5, myNumbers.number6];

    // this sorts all the numbers in the array (i.e. all the numbers entered into the box) the default sorting method does this from least to greatest, thus this is the answer
    answer = numArray.sort();

    // sets the valid data flag to false if any box is left empty
    if (isNaN(myNumbers.number1) === true || isNaN(myNumbers.number2) === true || isNaN(myNumbers.number3) === true || isNaN(myNumbers.number4) === true || isNaN(myNumbers.number5) === true || isNaN(myNumbers.number6) === true) {
        answer = "Please fill all fields";
        validData = false;
    }

    // outputs exception handling if any box is left blank or outputs the answer if no boxes are blank
    if (validData === false) {
        output.innerHTML = answer;
        instructions.innerHTML = "Please fill all the number boxes to continue";
    }
    else if (validData === true) {
        output.innerHTML = answer; // When the array is outputted it automatically adds commas between terms
        instructions.innerHTML = "Run more calculations with current numbers or change numbers to continue";
    }

    flag = true;
    console.log("End of Function var values: ", { "numArray": numArray, "answer": answer }); //debug line for the numArray, and answer vars in 1 line so that it's easier to comment out at the end.

    return answer;
}

function getSortIndex(val, array) {

    var count = 0;

    // This if statement serves as exception handling to future proof against changes to the HTML input method which could break this code.
    // Add more if statements to handle a larger array with more inputs or create a loop.
    if (array.length > 6) {
        throw ("getSortIndex requires 6 or fewer array input elements");
    }

    console.info("getSortIndex Values: ", { "val": val, "array": array });

    //Replace these statements with a loop to simplify, and future proof.
    if (val > array[0]) {
        count++;
    }

    if (val > array[1]) {
        count++;
    }

    if (val > array[2]) {
        count++;
    }

    if (val > array[3]) {
        count++;
    }

    if (val > array[4]) {
        count++;
    }

    if (val > array[5]) {
        count++;
    }

    return count;
}

function getIndexDeDup(index, array) {

    console.info("getIndexDeDup Values: ", { "index: ": index, "array: ": array });

    if (array[index] === null) {//this condition checks to see if the array element provided is null, and if it is, return the index provided.
        return index;
    }
    else {// if the array element provided is any value other than null it runs getIndexDeDup to make sure duplicate values
        return getIndexDeDup(index + 1, array); // this line recurses the function to increase the index number by one each time it runs
    }

    // NOTE: 1 There is an example of nested if logic in the txt file which is equlivant to the if logic above except that it has a hard limit at the number of index values it can process.
}

function getSortedArray() {
    var myNumbers = getNumbers();
    var numArray = [myNumbers.number1, myNumbers.number2, myNumbers.number3, myNumbers.number4, myNumbers.number5, myNumbers.number6];
    var sortedArray = [null, null, null, null, null, null];

    sortedArray[getIndexDeDup(getSortIndex(numArray[0], numArray), sortedArray)] = numArray[0];
    sortedArray[getIndexDeDup(getSortIndex(numArray[1], numArray), sortedArray)] = numArray[1];
    sortedArray[getIndexDeDup(getSortIndex(numArray[2], numArray), sortedArray)] = numArray[2];
    sortedArray[getIndexDeDup(getSortIndex(numArray[3], numArray), sortedArray)] = numArray[3];
    sortedArray[getIndexDeDup(getSortIndex(numArray[4], numArray), sortedArray)] = numArray[4];
    sortedArray[getIndexDeDup(getSortIndex(numArray[5], numArray), sortedArray)] = numArray[5];

    return sortedArray;
}

function middle() {
    // var validData = true; // this var is used later so that any empty boxes are caught
    if (validateNumbers(getNumbers())) {
        var sortedArray = getSortedArray();
        console.log("sortedArray ", sortedArray);
        var sum = sortedArray[2] + sortedArray[3];
        answer = sum / 2;
        console.log("answer " + answer);
        output.innerHTML = answer;
    }



    // //declares the myNumbers var which we assign data to when the getNumbers function is called 
    // var myNumbers = getNumbers();

    // var answer = "";





    // // //declares a var with all 6 numbers written out in a list other wise known as an array. each of these items can be removed individually from the array 
    // var numArray = [myNumbers.number1, myNumbers.number2, myNumbers.number3, myNumbers.number4, myNumbers.number5, myNumbers.number6];
    // // console.log(myNumbers.number1)
    // // // var sortedArray = [];
    // // let sortedArray = numArray.sort(function (a, b) {
    // //     console.log("array", a, b)
    // //     return a - b
    // // });
    // // // numArray = numArray.sort();
    // // console.log(sortedArray);


    // // var test = numArray.splice(Math.max(myNumbers.number1, myNumbers.number2, myNumbers.number3, myNumbers.number4, myNumbers.number5, myNumbers.number6));


    // // //splices away the first 2 elements in the array
    // // sortedArray.splice(0, 2); //the first number indicates the index of the first element to remove and the second number indicates how many elements to cut away including and after the element indicated in the first number
    // // console.log(sortedArray);
    // // //splices the last 2 elements in the array
    // // sortedArray.splice(2, 2); // 2 is used to indicate the index of the first element to cut away because the orignal first 2 elements no longer exist index 2 actually corisponds to the original 5th number (but now the 3rd)
    // // console.log(sortedArray);

    // // // adds the first and second elements in the array
    // // var sum = sortedArray[0] + sortedArray[1]; // the index of the first and second elements are added. [] indicates that the number contained within points to the index of that element in the array refferenced to the left (numArray)
    // // var count = 2;
    // // answer = sum / count;

    // var sortedArray = [null, null, null, null, null, null];
    // // newArray = myNumbers;
    // // sortedArray[1] = 5;
    // // var index = newSort(myNumbers.number1, numArray);
    // sortedArray[getIndexDeDup(getSortIndex(numArray[0], numArray),sortedArray)] = numArray[0];
    // sortedArray[getIndexDeDup(getSortIndex(numArray[1], numArray),sortedArray)] = numArray[1];
    // sortedArray[getIndexDeDup(getSortIndex(numArray[2], numArray),sortedArray)] = numArray[2];
    // sortedArray[getIndexDeDup(getSortIndex(numArray[3], numArray),sortedArray)] = numArray[3];
    // sortedArray[getIndexDeDup(getSortIndex(numArray[4], numArray),sortedArray)] = numArray[4];
    // sortedArray[getIndexDeDup(getSortIndex(numArray[5], numArray),sortedArray)] = numArray[5];
    // // console.log("midLeftNum", midLeftNum);
    // // newArray = newArray.splice(0,1);
    // // console.log(newArray);







    // // sets the valid data flag to false if any box is left empty
    // if (isNaN(myNumbers.number1) === true || isNaN(myNumbers.number2) === true || isNaN(myNumbers.number3) === true || isNaN(myNumbers.number4) === true || isNaN(myNumbers.number5) === true || isNaN(myNumbers.number6) === true) {
    //     answer = "Please fill all fields";
    //     validData = false;
    // }

    // // outputs exception handling if any box is left blank or outputs the answer if no boxes are blank
    // if (validData === false) {
    //     output.innerHTML = answer;
    //     instructions.innerHTML = "Please fill all the number boxes to continue";
    // }
    // else if (validData === true) {
    //     output.innerHTML = answer; // When the array is outputted it automatically adds commas between terms
    //     instructions.innerHTML = "Run more calculations with current numbers or change numbers to continue";
    // }

    flag = true;
    // console.log("End of Function var values: ", { "sum": sum, "count": count, "numArray": numArray, "answer": answer }); //debug line for the sum, count, numArray, and answer vars in 1 line so that it's easier to comment out at the end

    return answer;
}

function validateNumbers(myNumbers) {
    // sets the valid data flag to false if any box is left empty
    if (isNaN(myNumbers.number1) === true || isNaN(myNumbers.number2) === true || isNaN(myNumbers.number3) === true || isNaN(myNumbers.number4) === true || isNaN(myNumbers.number5) === true || isNaN(myNumbers.number6) === true) {
        // answer = "Please fill all fields";
        // validData = false;
        output.innerHTML = "Please fill all fields";
        instructions.innerHTML = "Please fill all the number boxes to continue";
        return false;
    }

    // outputs exception handling if any box is left blank or outputs the answer if no boxes are blank
    // if (validData === false) {

    // }
    else {
        // output.innerHTML = answer; // When the array is outputted it automatically adds commas between terms
        instructions.innerHTML = "Run more calculations with current numbers or change numbers to continue";
        return true;
    }
}

function updateModeDict(val, possibleModes) {
    if (possibleModes["val_" + val]) {
        possibleModes["val_" + val].count++;
    }
    else {
        possibleModes["val_" + val] = { count: 1, checked: false };
    }
    return possibleModes;
}


function getModesArrayAndMax(val, possibleModes, modeInfo) {

    var modeObj = possibleModes["val_" + val]
    if (modeObj.count > 1) {
        if ((modeInfo.maxCount === 0 || modeObj.count === modeInfo.maxCount) && !modeObj.checked) {
            modeObj.checked = true;
            modeInfo.modesArray.push(val); //adds data to the array
            modeInfo.maxCount = modeObj.count;
        }
        else if (modeObj.count > modeInfo.maxCount) {
            modeInfo.modesArray = [];
            modeObj.checked = true;
            modeInfo.modesArray.push(val);
            modeInfo.maxCount = modeObj.count;
        }
    }

    return modeInfo;
}

function mode() {
    if (validateNumbers(getNumbers())) {

        var myNumbers = getNumbers();
        var numArray = [myNumbers.number1, myNumbers.number2, myNumbers.number3, myNumbers.number4, myNumbers.number5, myNumbers.number6];
        var modeInfo = {
            modesArray: [],
            maxCount: 0
        }
        var possibleModes = {};

        possibleModes = updateModeDict(numArray[0], possibleModes);
        possibleModes = updateModeDict(numArray[1], possibleModes);
        possibleModes = updateModeDict(numArray[2], possibleModes);
        possibleModes = updateModeDict(numArray[3], possibleModes);
        possibleModes = updateModeDict(numArray[4], possibleModes);
        possibleModes = updateModeDict(numArray[5], possibleModes);
        console.info(possibleModes);

        modeInfo = getModesArrayAndMax(numArray[0], possibleModes, modeInfo);
        modeInfo = getModesArrayAndMax(numArray[1], possibleModes, modeInfo);
        modeInfo = getModesArrayAndMax(numArray[2], possibleModes, modeInfo);
        modeInfo = getModesArrayAndMax(numArray[3], possibleModes, modeInfo);
        modeInfo = getModesArrayAndMax(numArray[4], possibleModes, modeInfo);
        modeInfo = getModesArrayAndMax(numArray[5], possibleModes, modeInfo);
        console.info({ "modesArray": modeInfo.modesArray, "modesCount ": modeInfo.modesArray.length });

        if (modeInfo.modesArray.length === 0) {
            answer = "There are no modes.";
        } else if (modeInfo.modesArray.length === 1) {
            answer = "The mode is: " + modeInfo.modesArray;
        } else if (modeInfo.modesArray.length === 2) {
            answer = "The bimodials are: " + modeInfo.modesArray;
        } else if (modeInfo.modesArray.length > 2) {
            answer = "The mulitmodeials are: " + modeInfo.modesArray;
        }
        
        output.innerHTML = answer;

    }

    return;
}
"use strict";

//Global vars
var output = document.getElementById("output"); //shorthand to point ot the output/answer box in the HTML document
var instructions = document.getElementById("instructions"); //shorthand to point ot the top instructions box in the HTML document
var answer = ""; //initalizes the answer var which is used to store the answer var in every function (this isn't super clean but it's not technically bad)

instructions.innerHTML = "Type each number you would like parsed in the boxes below"; // this sets the text in the instructions box and also allows it to be changed in later functions

// NOTE: 2 See txt file to learn why the flag and validData vars were removed in the final version of this document
// NOTE: 3 see txt file to learn why i perfer capalisized and pure functions and why they are used here
// NOTE: 4 see txt file to learn why the functions are sorted the way they are

//IMPORTANT: if you wish to see the console debug the code as it runs simply find the 15 instances of "// console.info" and replace them with "console.info"

// !!!: Action functions section
// These are called by the HTML and which initiate and link to many things.

function mean() {

    if (validateNumbers(getNumbers())) {
        //declares the myNumbers var which we assign data to when the getNumbers function is called 
        var myNumbers = getNumbers();
        answer = "";//Resets the answer var so that only the new answer is displayed

        var sum = myNumbers.number1 + myNumbers.number2 + myNumbers.number3 + myNumbers.number4 + myNumbers.number5 + myNumbers.number6; //See line 25 comment for how this works
        var count = 6;

        answer = sum / count;
        output.innerHTML = answer;
        // console.info("End of mean() Function values: ", { "myNumbers": myNumbers, "answer": answer, "sum": sum, "count": count }); //debug line for the sum, count, and answer values in 1 line so that it's easier to comment out at the end
    }

    return answer;
}

// This function finds the middle or "median" number from the list of data provided
function middle() {

    if (validateNumbers(getNumbers())) {
        var sortedArray = getSortedArray();//runs getSortedArray() (which in turn activates 2 more functions to complete its task) which will return an sorted array of all the data entered by the user in each box into seperate elements
        var sum = sortedArray[2] + sortedArray[3]; //adds the numbers in the middle 2 elements since when finding the middle of an even number of values you take the center 2 points from your ordered data list and find mean with them (add then divide)

        answer = sum / 2;
        output.innerHTML = answer;
        // console.info("End of middle() Function values: ", { "sortedArray": sortedArray, "answer": answer, "sum": sum }); //debug line for the sortedArray and answer, and sum values in 1 line so that it's easier to comment out at the end
    }

    return answer;
}

// this function finds the mode(s) of the data provided
function mode() {

    // This if statement by default will assume that it should only run when validateNumbers returns true so no operators are nessessary
    if (validateNumbers(getNumbers())) {//This condition is only met when the validateNumbers function returns true, the data collected/returned in the getNumbers function is passed into the validateNumbers function

        var myNumbers = getNumbers();
        var numArray = [myNumbers.number1, myNumbers.number2, myNumbers.number3, myNumbers.number4, myNumbers.number5, myNumbers.number6];
        // this initalizes the modeInfo object which stores the modesArray and maxCount properties which happen to be vars
        var modeInfo = {
            modesArray: [],
            maxCount: 0
        }
        var possibleModes = {}; // initalizes the object in which all the potential modes found in the linked function logic below are stored after being processed

        //an additional line is required for each number data box that is entered into the HTML since this calculates everything manually since a for loop was not promitted in the intial scope of this project
        possibleModes = updateModeDict(numArray[0], possibleModes);//numbering starts at 0 since when you refer to array elements in this fassion you call the element by it's index number which begins with 0 rather than 1
        possibleModes = updateModeDict(numArray[1], possibleModes);
        possibleModes = updateModeDict(numArray[2], possibleModes);
        possibleModes = updateModeDict(numArray[3], possibleModes);
        possibleModes = updateModeDict(numArray[4], possibleModes);
        possibleModes = updateModeDict(numArray[5], possibleModes);
        // console.info({ "possibleModes": possibleModes }); //sends the list of possible modes to console so the debugger can see what's happening

        // the list of possible modes that was found with the above chunk of code is then processed with another object which contains properties for getModesArrayAndMax() which finds which numbers are mode and also puts them in an array
        //an additional line is required for each number data box that is entered into the HTML since this calculates everything manually since a for loop was not promitted in the intial scope of this project
        modeInfo = getModesArrayAndMax(numArray[0], possibleModes, modeInfo);
        modeInfo = getModesArrayAndMax(numArray[1], possibleModes, modeInfo);
        modeInfo = getModesArrayAndMax(numArray[2], possibleModes, modeInfo);
        modeInfo = getModesArrayAndMax(numArray[3], possibleModes, modeInfo);
        modeInfo = getModesArrayAndMax(numArray[4], possibleModes, modeInfo);
        modeInfo = getModesArrayAndMax(numArray[5], possibleModes, modeInfo);
        //sends the final list of modes to the console along with the number elems in the array so the debugger can see what's happening
        // console.info({ "modesArray from modeInfo": modeInfo.modesArray, "modesArray legnth from modeInfo ": modeInfo.modesArray.length });

        // if logic which uses the correct terms to describe the mode depending on how many modes are present in the nubmer set
        // CRED: info on what "mode" is, on a math basics level was sourced from "https://www.mathsisfun.com/definitions/mode.html" && "https://www.ducksters.com/kidsmath/mean_median_mode_range.php"
        if (modeInfo.modesArray.length === 0) {
            answer = "There are no modes.";
        } else if (modeInfo.modesArray.length === 1) {
            answer = "The mode is: " + modeInfo.modesArray;
        } else if (modeInfo.modesArray.length === 2) {
            answer = "The bimodals are: " + modeInfo.modesArray;
        } else if (modeInfo.modesArray.length > 2) {
            answer = "The multimodals are: " + modeInfo.modesArray;
        }

        output.innerHTML = answer; //outputs the modes along with whatever message is appropiate to the HTML output/answer box
        // console.info("End of mode() Function values: ", { "answer": answer }); //debug line for the answer value to match format of other comments and to look fancy in console
    }

    return answer;
}

// finds the mathmatical range of the numbers from the data provided in the HTML input boxes
function range() {

    if (validateNumbers(getNumbers())) {
        //declares the myNumbers var which we assign data to when the getNumbers function is called 
        var myNumbers = getNumbers();
        answer = "";

        var minVal = Math.min(myNumbers.number1, myNumbers.number2, myNumbers.number3, myNumbers.number4, myNumbers.number5, myNumbers.number6);//calls the object and then the data within the object to calculate which number is the highest
        var maxVal = Math.max(myNumbers.number1, myNumbers.number2, myNumbers.number3, myNumbers.number4, myNumbers.number5, myNumbers.number6);//calls the object and then the data within the object to calculate which number is the highest

        answer = maxVal - minVal;
        output.innerHTML = answer;
        // console.info("End of range() Function values: ", { "myNumbers": myNumbers, "answer": answer, "minVal": minVal, "maxVal": maxVal }); //debug line for the myNumbers, minVal, maxVal and answer values in 1 line so that it's easier to comment out at the end
    }

    return answer;
}

//Orders the numbers entered into each number/input box starting with the lowest on the left and moving to the highest on the right, by numerical value
function orderLH() {

    if (validateNumbers(getNumbers())) {
        //declares the myNumbers var which we assign data to when the getNumbers function is called 
        var myNumbers = getNumbers();
        answer = "";

        //declares a var with all 6 numbers written out in a list other wise known as an array. each of these items can be removed individually from the array 
        var numArray = [myNumbers.number1, myNumbers.number2, myNumbers.number3, myNumbers.number4, myNumbers.number5, myNumbers.number6];
        // this calls out to the getSortedArray function which
        var sortedArray = getSortedArray();

        answer = sortedArray;
        output.innerHTML = answer;
        // console.info("End of orderLH() Function values: ", { "myNumbers": myNumbers, "answer": answer, "numArray": numArray }); //debug line for the myNumbers, numArray, maxVal and answer values in 1 line so that it's easier to comment out at the end
    }

    return answer;
}

// finds the smallest number from the list of numbers provided in the HTML input boxes
function smallestNumber() {

    if (validateNumbers(getNumbers())) {
        //declares the myNumbers var which we assign data to when the getNumbers function is called 
        var myNumbers = getNumbers();
        answer = "";

        answer = Math.min(myNumbers.number1, myNumbers.number2, myNumbers.number3, myNumbers.number4, myNumbers.number5, myNumbers.number6);//calls the object and then the data within the object to calculate which number is the highest
        output.innerHTML = answer; //sends to HTML answer/output box
        // console.info("End of smallestNumber() Function values: ", { "myNumbers": myNumbers, "answer": answer }); //debug line for the myNumbers and answer values in 1 line so that it's easier to comment out at the end
    }

    return answer;
}

// finds the largest number from the list of numbers provided in the HTML input boxes
function largestNumber() {

    if (validateNumbers(getNumbers())) {
        //the getNumbers function is called here eventhough it's called in the if statement because here it's used to pull the myNumbers object for use and above it's mearly passed to another function to validate data
        var myNumbers = getNumbers(); //declares the myNumbers var which we assign data to when the getNumbers function is called
        answer = "";

        answer = Math.max(myNumbers.number1, myNumbers.number2, myNumbers.number3, myNumbers.number4, myNumbers.number5, myNumbers.number6);//calls the object and then the data within the object to calculate which number is the highest
        output.innerHTML = answer; //sends to HTML answer/output box
        // console.info("End of largestNumber() Function values: ", { "myNumbers": myNumbers, "answer": answer }); //debug line for the myNumbers and answer values in 1 line so that it's easier to comment out at the end
    }

    return answer;
}

//outputs all unique numbers inputted into the number boxes (numbers which appear in one box but not in any others)
function unique() {

    if (validateNumbers(getNumbers())) {
        //declares the myNumbers var which we assign data to when the getNumbers function is called 
        var myNumbers = getNumbers();
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

        // exception handling in case there are no unique numbers
        if (answer === "") {
            answer = "No unique numbers were found"
        }

        output.innerHTML = answer;
        // console.info("End of unique() Function values: ", { "myNumbers": myNumbers, "answer": answer }); //debug line for the myNumbers, and answer values in 1 line so that it's easier to comment out at the end
    }

    return answer;
}

//outputs the number box values for boxes in which its numbers appear in multiple number boxes (numbers which appear in more than one box but not numbers which appear in no boxes)
function duplicate() {

    if (validateNumbers(getNumbers())) {
        //declares the myNumbers var which we assign data to when the getNumbers function is called 
        var myNumbers = getNumbers();
        answer = "";

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

        output.innerHTML = answer;
        // console.info("End of duplicate() Function values: ", { "myNumbers": myNumbers, "answer": answer, "numArray": numArray }); //debug line for the myNumbers, numArray, and answer values in 1 line so that it's easier to comment out at the end
    }

    return answer;
}


// !!!: Pure(ish) function section

//Purly handles making sure potential duplicate data is allicated a spot so the process doesnt crash after getSortIndex() runs so that the array created in getSortedArray() is clean and doesn't have holes
// Cool Fact: This is a recurrsive function!
function getIndexDeDup(index, array) {

    // console.info("getIndexDeDup Values: ", { "index: ": index, "array: ": array }); //this runs every time the function runs in the if statement so each itteration in the console is more sorted than the last

    if (array[index] === null) {//this condition checks to see if the array element provided is null, and if it is, return the index provided.
        return index;
    }
    else {// if the array element provided is any value other than null it runs getIndexDeDup to make sure duplicate values
        return getIndexDeDup(index + 1, array); // this line recurses the function to increase the index number by one each time it runs
    }

    // NOTE: 1 There is an example of nested if logic in the txt file which is equlivant to the if logic above except that it has a hard limit at the number of index values it can process.
}

// This function pulls the data from the html form boxes and converts them to numbers
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
    let myNumbers = { //This object is technically a dictionary
        number1: parseFloat(num1.value || num1), // Call using: myNumbers.number1 (myNumbers declares the object to search in and number1 is the desired object from within that object which serves as a box for our number data)
        number2: parseFloat(num2.value || num2), // The/pipeline operator here says to grab the .value from the html box if valid and if not to just pull the value of the appropiate number, this 
        number3: parseFloat(num3.value || num3), // replaces the if logic which was previously used  to allow multiple run instancces
        number4: parseFloat(num4.value || num4), // the numbers within the object exist as properties of that object which can be defined and interpertated individually
        number5: parseFloat(num5.value || num5),
        number6: parseFloat(num6.value || num6),
    }

    //By using a comma instead of a plus to concatanite the string and the object it's possible to have all the data in the object displayed rather than displaying the fact that an object exists
    // console.info("Numbers contained in myNumbers object: ", myNumbers); //debug line for all the numbers that were encased in the myNumbers object
    return myNumbers; //returns the object so that it can be called in other functions
}

//uses the possibleModes property that was populated using updateModeDict() to find the true mode(s) and return that value back to the function which called it
function getModesArrayAndMax(val, possibleModes, modeInfo) {

    var modeObj = possibleModes["val_" + val]; //initalizes and declares the modeObj var which stores the property from the possibleModes object which matches the formula it calculates in []
    // console.info({ "modeObj": modeObj });//logs the modeObj var to console

    //this if statement handles actually putting the numbers which will be displayed as mode into the modesArray and ensuring duplicates don't get in, as well as ensuring that all numbers added are truly mode
    if (modeObj.count > 1) {// this condition is met if the count sub property ofo the property of possibleModes that was assigned to modeObj is greater than 1 (which it always should be if updateModeDict() has run and that value has more than 1 instance)
        if ((modeInfo.maxCount === 0 || modeObj.count === modeInfo.maxCount) && !modeObj.checked) {// this statement runs when no number has been processed before, or when the number being processed (next line)
            //is equlivent to the number of instances of mode, but not greater. It also requires that the checked property be set to false (not checked)
            modeObj.checked = true; //this is where the checked property that was initalized in updateModeDict() is used
            //val is the data in the original array with the user submitted nubmers that was pushed to this function
            modeInfo.modesArray.push(val); //adds data to the array into a new slot without editing or removing previous data, new data is added to the end of the array
            modeInfo.maxCount = modeObj.count; //raises the number of instances a number must appear to meet or exceed the currently found maximum amount of instances of a number, used in the else part of this logic
        }
        else if (modeObj.count > modeInfo.maxCount) {// this condition is only true when the code above finds a term which has more instances than the previous term that it declared as having the most instances (maxCount value)
            modeInfo.modesArray = [];// this clears any data that was in the modesArray since if a term was found with more instances none of the other instances would actually be mode since it's only the term with the most instances
            modeObj.checked = true;
            modeInfo.modesArray.push(val); //adds data to the newly emptied array. this command doesn't modify the data in the array (that happens above), this command only puts new data in the modesArray
            modeInfo.maxCount = modeObj.count;//resets max count to be the value of this new instance number (the count that was higher than the previous max count) so that the code can continue to work to examine the rest of the data for modes
        }
    }

    return modeInfo; //sends the modesArray amung other things back to the function which called this one, all encapsulated in the modeInfo object which is declared in the origin function
}

//pushes the data which is sorted by getSortIndex into an array in which the data is organized smallest to largest
function getSortedArray() {

    var myNumbers = getNumbers(); //Grabs the data from the boxes so that each boxes data can later be extracted from its object into seperate array elements which are used 
    //to sort the boxes into a new array which will be ordered least to greatest
    var numArray = [myNumbers.number1, myNumbers.number2, myNumbers.number3, myNumbers.number4, myNumbers.number5, myNumbers.number6];// this is where the myNumbers var object properties are used
    var sortedArray = [null, null, null, null, null, null]; //initalizes the array that all of the data is pushed into with predefined spots which are overridden, this ensaures that every bit of data has an element to sit in

    //These lines are where the data is pushed into the actual array that was generated
    //Cool Fact: When it pushes the data none of the DeDup or sorting logic (found in GetIndexDeDup and getSortIndex()) has actually run yet, however when the data is pushed into the array it's forced to 
    //run each of those functions and clean the data.
    //Cool Fact 2: Any data that those functions need passed into them is declared at the top of this function and then passed into the arguments of the function that needs to process it.
    sortedArray[getIndexDeDup(getSortIndex(numArray[0], numArray), sortedArray)] = numArray[0];
    sortedArray[getIndexDeDup(getSortIndex(numArray[1], numArray), sortedArray)] = numArray[1];
    sortedArray[getIndexDeDup(getSortIndex(numArray[2], numArray), sortedArray)] = numArray[2];
    sortedArray[getIndexDeDup(getSortIndex(numArray[3], numArray), sortedArray)] = numArray[3];
    sortedArray[getIndexDeDup(getSortIndex(numArray[4], numArray), sortedArray)] = numArray[4];
    sortedArray[getIndexDeDup(getSortIndex(numArray[5], numArray), sortedArray)] = numArray[5];

    return sortedArray;//this returned value is sent back to the function which called it and can be interperted as a single array of numbers
}

// this is where the data that is inputted by the user into the HTML boxes is actually sorted and pushed for review by getIndexDeDup before it's commited to the sortedArray array in getSortedArray()
function getSortIndex(val, array) {

    var count = 0;

    // This if statement serves as exception handling to future proof against changes to the HTML input method which could break this code.
    // Add more if statements to handle a larger array with more inputs, or create a loop.
    if (array.length > 6) {
        throw ("getSortIndex requires 6 or fewer array input elements"); // throw is used to push a message to the console that the code has broken and directs the debugger to this line
    }

    // console.info("getSortIndex Values: ", { "val": val, "array": array }); //this runs every time the function runs in the if statement so each itteration in the console is more sorted than the last
    // eventhough this function is not recurrsive this log runs multiple times because the data that the recurssive getIndexDeDup function runs recollects the updated dynamic data that it needs each  time it runs and part of that 
    // data collection process involves calling this function so that it has an index to to run its math from

    // To improve this code: Replace these statements with a loop to simplify, and future proof.
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

//This is where the possibleModes object properties are generated (these properties are used in mode())
function updateModeDict(val, possibleModes) {

    //this logic basically checks to see if a value has already been entered into the possibleModes object and if it has increases the property describing how many of that value exist (count)
    //if the value passed to the function is new (i.e. not in possibleModes) then it adds it and gives it the properties it will need to be compared to find mode later in getModesArrayAndMax( )
    if (possibleModes["val_" + val]) { // if the possibleModes object has val_<the number value that's in the array element that that was passed down in the function call> then run this condition
        possibleModes["val_" + val].count++;//increases the value of the count property attached to property by 1 and stores it when this function is returned
    }
    else {
        //when count and checked are used in this line they are also initalized which is neat and tidy
        possibleModes["val_" + val] = { count: 1, checked: false }; // if a property/sub object doesn't have the value described (see above comment) then it adds the count property and checked properties to the property and pushes when returned
    }

    return possibleModes;//this is where the data determined in the above logic is passed back to the function which called this function
}

// This (in addition to typically being used in conjunction with the getNumbers func) ensures that data was entered into all the boxes and returns true || false depending on which contion is met
function validateNumbers(myNumbers) {

    // sets the valid data flag to false if any box is left empty
    if (isNaN(myNumbers.number1) === true || isNaN(myNumbers.number2) === true || isNaN(myNumbers.number3) === true || isNaN(myNumbers.number4) === true || isNaN(myNumbers.number5) === true || isNaN(myNumbers.number6) === true) {
        output.innerHTML = "Please fill all fields";//This message is placed in the answer box when a number box is left empty
        instructions.innerHTML = "Please fill all the number boxes to continue";//This message is placed in the top instruction box when a number box is left empty
        return false; //this value is passed back to whatever function called it
    }
    else {
        // output.innerHTML = answer; // When the array is outputted it automatically adds commas between terms
        instructions.innerHTML = "Run more calculations with current numbers or change numbers to continue";//This message is placed in the top instruction box when all number input boxes contain data
        return true;//this value is passed back to whatever function called it
    }
}
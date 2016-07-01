console.log("main.js loaded");

var addButtonEl = document.getElementById("addButton"),             // Reference to the "+" button element in the DOM
    subtractButtonEl = document.getElementById("subtractButton"),   // Reference to the "-" button element in the DOM
    multiplyButtonEl = document.getElementById("multiplyButton"),   // Reference to the "*" button element in the DOM
    divideButtonEl = document.getElementById("divideButton"),       // Reference to the "/" button element in the DOM
    squareButtonEl = document.getElementById("squareButton"),       // Reference to the "#²" button element in the DOM
    sqRootButtonEl = document.getElementById("sqRootButton"),       // Reference to the "√" button element in the DOM
    buttonResetEl = document.getElementById("buttonResetEl"),       // Reference to the button Reset element in the DOM
    
    resultsDiv = document.getElementById("resultsDiv"),

    input = document.getElementById("userInput");   //where our users input their numbers
    userInput = [],         //to save our values (1st # saved on clicking the operator button of choice, 2nd # saved on "ENTER" keyup)
    functionToUse = null,   //this will save our "functionToUse" for further action

function add(num1, num2){   //lambda functions as used in the Jasmine testing. Much less wordy in this version than the first time around!
  return num1 + num2;
}
function subtract(num1, num2){
  return num1 - num2;
}
function multiply(num1, num2){
  return num1 * num2;
}
function divide(num1, num2){
  return num1 / num2;
}
function square(num1){
  return num1 * num1;
}
function squareRoot(num1){
  return Math.sqrt(num1);
}

/////////////////////Event Listeners/////////////////////
addButtonEl.addEventListener("click", function(){
  userInput.push(parseInt(input.value))
  input.value = "";
  functionToUse = add;
  input.focus();
});

subtractButtonEl.addEventListener("click", function(){
  userInput.push(parseInt(input.value))
  input.value = "";
  functionToUse = subtract;
  input.focus();
});

multiplyButtonEl.addEventListener("click", function(){
  userInput.push(parseInt(input.value))
  input.value = "";
  functionToUse = multiply;
  input.focus();
});

divideButtonEl.addEventListener("click", function(){  //only commented here for 4 basic math operators (they are essentially same)
  userInput.push(parseInt(input.value))   //takes user input.value, parses it, and pushes it to the userInput array for use later.
  input.value = "";                       //after userInput added to array, value is reset to allow for 2nd number to be input
  functionToUse = divide;                 //assigns the function to use
  input.focus();                          //directs the focus back to the input area
});

squareButtonEl.addEventListener("click", function(){  //only commented here for 2 "complex" math operators (they only need 1 input value)
  let squareValue = square(parseInt(input.value));    //holds value of square function results after parsing input and assigns to our "variable"
  input.value = squareValue;                          //input.value displays the "answer" of the equation as per directions
  resultsDiv.innerText = `= ${squareValue}`;          //resultsDiv displays the "answer" of the equation in the area the old calculator did
});

sqRootButtonEl.addEventListener("click", function(){
  let sqRootValue = squareRoot(parseInt(input.value));
  input.value = sqRootValue;
  resultsDiv.innerText = `= ${sqRootValue}`;
});

document.getElementById("userInput").addEventListener("keyup", function(event){
  if (event.keyCode === 13){                                      //if checks whether "ENTER" key pressed, and runs if true 
    userInput.push(parseInt(input.value))                         //takes the 2nd number, parses it, and pushes it to the userInput array
    let mathResult = functionToUse(userInput[0], userInput[1]);   //mathResult becomes the value of whichever "functionToUse" and the saved userInput array data
    input.value = mathResult;                                     //displays mathResult in the input.value area as per directions
    resultsDiv.innerText = `= ${mathResult}`;                     //displays mathResult in the resultsDiv area
  }
});

buttonResetEl.addEventListener("click", function(){   //my reset button function
  input.value = "";                                   //resets input to "nothing"
  resultsDiv.innerText = "=";                         //resets resultsDiv to "="
});

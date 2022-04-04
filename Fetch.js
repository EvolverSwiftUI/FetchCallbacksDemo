 
// Call back function
function displayGreeting(displayName) {
    console.log("Hello");
    displayName();
    console.log("Good Evening");
}

// Using callback function
displayGreeting(function() {
    console.log("Siva");
});

// Using function
function displayName() {
    console.log("Siva");
}

displayGreeting(displayName);

// Using function expression
let displayRam = function() {
    console.log("Ram");
};

displayGreeting(displayRam);

/*
Q. What is callback function?
A. A callback is a function that is passed as an argument to another function.
*/

// Schedulers

/*
Schedulers are used to schedule the execution of callback function.
There are different scheduler methods.

1. setinterval()
2. clearinterval()
3. settimeout()
4. cleartimeout()
......................etc.
*/

/*
1. setinterval()

by using this we can execute a function repeatedly,
at the specified interval of time.

setinterval(function, delay);
1 second = 1000 milli seconds
*/

// let counter = 0;
// let uniqueId = setInterval(function() {
//     console.log(counter);
//     counter = counter + 1;
// }, 2000);

let setIntervalBtn = document.getElementById("setIntervalBtn");
let clearIntervalBtn = document.getElementById("clearIntervalBtn");

let uniqueId = null;
setIntervalBtn.onclick = function() {
    console.log("setIntervalBtn Tapped");
    let counter = 0;
    uniqueId = setInterval(function() {
        console.log(counter);
        counter = counter + 1;
    }, 2000);
};

clearIntervalBtn.onclick = function() {
    console.log("clearIntervalBtn Tapped");
    clearInterval(uniqueId);
};
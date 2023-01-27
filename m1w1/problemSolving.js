const process = require('process');
// Write a program that takes in an unlimited number of command line arguments and prints out the sum of them. It skips anything that isn't a number.

//Identify what we are trying to solve

//Input: Command line arguments. Type is numbers. 
//Output: Single number (Sum of the inputs)

//Something that the user is typing in the terminal
//How do we get command line arguments?
[
    '/home/senhorgomes/.nvm/versions/node/v18.0.0/bin/node',
    '/home/senhorgomes/lighthouse/lectures/W2D1/problemSolving.js',
    '5',
    '5',
    '5',
    '5',
    'potato'
  ]
// console.log(process.argv)
const aNumber = 5;
const notANumber = "5";
// console.log('Before conversion',aNumber === notANumber)
//Convert every NUMBER argument into a number
///Convert strings into numbers
// console.log('After conversion', aNumber === Number(notANumber))

const word = "potato";
const convertedWord = Number(word) //NaN
const convertedNumber = Number(notANumber) // 5
///Only convert actual numbers from strings to numbers
// console.log('Converting potato', Number(word))
// Upon converting a string it turns into NaN, now we need to check if its an NaN?
console.log("Checking the result of NaN", Number.isNaN(convertedWord), Number.isNaN(convertedNumber))
//This could be our if statement

const arrayOfCommandLineArguments = process.argv
//How can we loop through an array?
//for loop

const loopingThroughCommandLine = function(array) {
    let sumOfNumbers = 0;
    for(const element of array){
        //convert every element into number
        const convertedElement = Number(element);
        //if element is NOT NaN, console.log it
        //Number.isNaN will return true if the converted element is NaN
        if(!Number.isNaN(convertedElement)){
            // add convertedElement to the existing value of sumOfNumbers
            // 0 + 5
            // 5 + 10
            // 15 + 5
            sumOfNumbers += convertedElement
        }
        // !Number.isNaN(convertedElement) && (sumOfNumbers += convertedElement)
    }
    return sumOfNumbers
}


console.log('Sum of all numbers', loopingThroughCommandLine(arrayOfCommandLineArguments))

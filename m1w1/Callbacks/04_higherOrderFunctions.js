//Calculator
//Takes in two values and sums them up
const addition = function(x,y){
    return x + y
}
//Subtraction is still a regular function
//These functions can take in primitive data types, and data structures, even though it return NaN
const subtraction = function(x,y){
    return x - y
}
// console.log(subtraction(5,3))

//Higher order function
/////Takes in another function as a parameter, it stops being a function, it is now a higherOrderFunction
const calc = function(a,b,action){
    console.log(`Initial numbers ${a} & ${b} = ${action(a,b)}`)
}

//Inside of line 15, subtraction is a callback
///A function that goes into another function
// calc(3,5,subtraction)
// calc(subtraction,5,3)

// const randomArray = [1,2,3,4,5]

const consoleLogEachNumber = (number) => {
    console.log(number)
};

//What is null?
//Null is a primitive data type
//Parameters are something you can pass in
//Arguments are pre-existing
// randomArray.forEach((e, i, a)=>{console.log(a)})

const randomArray = [1,2,3,4,5]
//The function has to take in an array, we want element, index, and array as arguements
//We need to make a function that takes in an array and console.logs each element
// Can it take in the array? Yes we got that
// What about index?
//Maybe use another looping method?
//Now we got all three
//Need a way for the user to select element, index, and or array
const printItem = (item) =>{
    console.log(item)
}

const addOneToEachNumber = (item) =>{
    console.log(item + 1)
}
const copyForEach = (action, passedInArray, element, index, array) => {
    // for(const element of array){
    //     console.log(array)
    // }
    for(let i = 0; i < passedInArray.length; i++){
        if(element){
            console.log("element")
            action(passedInArray[i])
        }
        if(index){
            console.log("index")
            action(i)
        }
        if(array){
            console.log("array")
            action(passedInArray)
        }
    }
}

copyForEach(addOneToEachNumber, randomArray,{}, true, false)

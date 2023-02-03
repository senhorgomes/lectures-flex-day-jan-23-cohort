//function definitions

function someFunction(){
    console.log("something")
}

const someConstFunction = function(){
    console.log("something")
}
const someArrowFunction = () => {
    console.log("something")
}
//Anything parameter

const someParemeterFunction = (parameter) =>{
    console.log(parameter)
}
// someParemeterFunction("Hello")
//Some funcitons have their own arguements
//arr.forEach((elements, index, array)=>{})
const someCallbackFunction = (parameter) =>{
    console.log(parameter)
}
//Higher Order Function, takes in a function as a parameter
const higherOrderFunctions = (action, string) => {
    action(string)
}
//A callback is when the function is used in another function
higherOrderFunctions(someCallbackFunction, "Hello")

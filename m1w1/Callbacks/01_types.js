//What types of functions exist?
//Anon-Function declaration
function someRandomFunction(){
    console.log("I am some random function!")
}


//Why do we need the ()?
//Reference
//someRandomFunction
//Invoking the function
// someRandomFunction()
function someRandomFunction(){
    console.log("I broke it!")
}
someRandomFunction = () => {
    console.log("Now im an arrow function!")
}
//Are hoisted

// someRandomFunction()
//Defined
//Are not hoisted
const someDefinedFunction = function() {
    console.log("I am defined!")
}

// someDefinedFunction


//Arrow functions
// const someArrowFunction = function(){
//     console.log("I am an arrow function!")
// }
const someArrowFunction = () => {
    console.log("I am an arrow function!")
}
// someArrowFunction()

const objectMethod = {
    name: "Bob",
    whatIsMyName: function(){
        console.log(`My name is ${this.name}`)
    }
}
objectMethod.whatIsMyName()

//Best practices
//Arrow functions for declared functions (const)
//Not using arrow functions for anon functions[function()]
//What are callbacks?
//Variable function call
//As an argument in a function
//Higher order function

// const timesTwo = function(number){
//     return number * 2;
// }
// // timesTwo(5)
// const car = {
//     wheels: 2
// }
// const displayResult = function(callback){
//     console.log("1",callback)
//     console.log("2",callback)
//     console.log("3",callback)
// }

const arrayOfThings = [1,2,3,4,5]
// displayResult(timesTwo(car.wheels))
// const newArrayOfThings = arrayOfThings.map((element)=>timesTwo(element))
arrayOfThings.forEach((element)=>{
    console.log(element)
})
// try and catch
try {
    nonExistentFunction();
  } catch (error) {
    console.error(error);
    // expected output: ReferenceError: nonExistentFunction is not defined
    // Note - error messages will vary depending on browser
  }
console.log("Another console log to execute")
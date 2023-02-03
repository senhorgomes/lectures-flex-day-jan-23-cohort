# Callbacks

## Today's menu

- Recap of functions
- Recap of loops
- Anonymous functions
- Higher order functions
- Callbacks

## Functions

### Quick Reminder - How we write a function

```Javascript
function myFunction(a, b, c) {
    return a + b + c;
}
```

### A function can be a *value* 

- Since a function is an object, it can be stored in a variable like anything else (ex: object, string)

```Javascript
let myFunction = function(a, b, c) {
    return a + b + c;
};
```

### What's an anonymous function?

- Also known as function definition
- The function written in the last section is also known as an *anonymous* function
- Sometimes it's easier or makes more sense to use a function without defining it first 

```Javascript
console.log(function(a, b, c) {
    return a + b + c;
});

// ok, this doesn't make much sense in this case. But how about this from map:

words.filter(word => word.length > 6);

// it would be kind of tedious to have to put that in its own function
```

### What's an function expression?

- The function keyword can be used to define a function inside an expression.

- You can also define functions using the Function constructor and a function declaration.


```Javascript
const someFunction = function(){
    console.log("Hello!")
}

//Invoking a function expression
someFunction()
```

### Function calling vs referencing

- We *call* a function when we want to run it and perform the actions inside. 
- To signal to JS that we want to call a function we include parentheses and parameters after if
- We *reference* a function when we pass it like any other variable
- To signal to JS that we want to reference a function we just use its name

```Javascript
console.log(add(1,2)); // this would log 3

console.log(add); // this would log something like [Function: add]
```

### Why would we want to reference a function?

- To pass it as a variable:
  - make our code *cleaner*
  - make our code *DRYer*
  - make our code *more reusable*

## Callbacks

### What is it?

- a function we pass to another function
  - it often is used at the *end* of that function, but not always!
  - usually placed as the last parameter

### Why are they helpful?

- for all the reasons we said we would want to reference a function above!
- and more!
  - to perform the given task when *something* happens in the parent function
  - to give the parent task *additional, variable functionality* (aka, let a function have the power to do other, undetermined things)

### Arrow functions?

- arrow functions were introduced in ES6
- they're anonymous by nature
- they can help us make things a little more readable
- they also help us deal with some scope issues (but don't worry about that right now)

```Javascript
// our old-school function
let myFunc = function(a, b, c) {
  return a + b + c;
}

// becomes...
let myArrowFunc = (a, b, c) => {
    return a + b + c;
}

// note that we drop the word "function"
// if we only have one parameter we can also drop our parentheses:
let myOneParamFunc = a => {
    return a * 2;
}

// since our function above only has one line, 
// we can make it even more concise:
let smallFunction = a => a * 2;

```


## Resources

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions
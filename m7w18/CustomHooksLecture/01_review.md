Pure functions? Impure functions?
Pure functions are simple, more predictable outcome
```Javascript
function addTwoNumbers(x, y){
    return x + y;
}
addTwoNumbers(10, 10)//20
```
Impure functions have side effects.

Side effects?
- Modifying any external state (variable)The two variable types include global variables and variables in the parent function scope.
```Javascript
let variableOutsideOfScope = 5;//20//35

function addNumbers(x){
    console.log(x)
    return variableOutsideOfScope+= x;
}
addNumbers(15)//20
addNumbers(15)//35
```
- Input/output The list includes logging to a console, writing to a screen or display, file I/O operations, network operations, HTTP requests, message queues, and database requests.
- Starting or ending external processes
- Calling any other function with side effects

Rules of hooks?
have to import into a React component/functions
no hooks inside conditionals->they must be called at the top level of the component
Unspoken rule -> we have to use the word use at the beginning 
Use use, to use
2 technically 3 rules right?
/Everytime count changes we want to console.log()
    Anytime the page is rendered, or a rerender is called
    // useEffect(()=>{
    //     console.log('Count is: ', count)
    // })
    Only once when the page is rendered.
    // useEffect(()=>{
    //     console.log('Count is: ', count)
    // }, [])
    Anytime count or the varible inside the dependcy, is modified, the useEffect is called.
    // useEffect(()=>{
    //     setCount(1)
    // }, [count])
    // Or create a custom hook
     // Custom hook! It console.logs changes to a piece of state.
    //  useStateChangeLogger(count);

Custom Hooks?
Needs to be connected to React in some sort of way
Why do we want to use custom hooks? Why do we want to use helper functions
Seperation of concerns, keep our code DRY, reusability, seperate logic from rendering
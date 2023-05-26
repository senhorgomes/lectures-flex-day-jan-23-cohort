import useCounter from '../hooks/useCounter';
function Counter() {
    // We moved this to our custom hook, useCounter.js
    // const [count, setCount] = useState(0);

    // useEffect(()=>{
    //     console.log("COUNTER HAS BEEN INCREASED!")
    // }, [count])

    const { count, setCount } = useCounter();

    return ( 
        <div>
            <h2>Counter: {count}</h2>
            <button onClick={()=>setCount((prev)=> prev + 1)}>Click me!</button>
        </div>
     );
}

export default Counter;
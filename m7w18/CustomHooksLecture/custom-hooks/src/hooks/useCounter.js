import {useEffect, useState} from 'react';

const useCounter = () => {
    
    const [count, setCount] = useState(0);

    useEffect(()=>{
        console.log("COUNTER HAS BEEN INCREASED!")
    }, [count])

    return {count, setCount}
}

export default useCounter;
import useTemperature from "../hooks/useTemperature";

function RainMan() {

    const {currentWeather, setRefetchWeather} = useTemperature();
    // Moved to our custom hook
//     const [currentWeather, setCurrentWeather] = useState("");
// // 43.6532° N, 79.3832° W
//     // make an axios call in a useEffect

//     useEffect(()=>{
//         axios.get("https://api.openweathermap.org/data/2.5/weather?lat=43.6532&lon=-79.3832&appid=c240fab09465371cad329427064d7694")
//         .then((response)=>{
//             const covertedTemp = Math.round(response.data.main.temp - 273.15)
//             setCurrentWeather(covertedTemp)
//         })
//     }, [])

    // parse through the information
    // setState to the current weather so it is displayed
    return ( 
    <div>
        <h2>The current weather is:</h2>
        <h1>{currentWeather} C</h1>
        {/* The !prev allows us to change our boolean value to true or false whenever needed */}
        {/* Our custom hook has a useEffect which listens to refetchWeather changes */}
        {/* So anytime the button is clicked, the state changes and useEffect is triggered */}
        <button onClick={()=>setRefetchWeather((prev)=> !prev)}>Recheck the weather please!</button>
    </div> 
    );
}

export default RainMan;
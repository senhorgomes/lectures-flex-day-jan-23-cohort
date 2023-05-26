import axios from 'axios';
// import useState
import { useState, useEffect } from 'react';
const useTemperature = () => {
    const [refetchWeather, setRefetchWeather] = useState(true);
    let [currentWeather, setCurrentWeather] = useState(0);
    // interviewrs, days, appointments
    // 43.6532° N, 79.3832° W
    // make an axios call in a useEffect

    useEffect(() => {
        // if (refetchWeather === 2) {
            axios.get("https://api.openweathermap.org/data/2.5/weather?lat=43.6532&lon=-79.3832&appid=c240fab09465371cad329427064d7694")
                .then((response) => {
                    console.log(response)
                    const covertedTemp = Math.round(response.data.main.temp - 273.15)
                    setCurrentWeather(covertedTemp);
                    console.log("I tried to refetch the weather! :)")
                })
        // }
    }, [refetchWeather])

    return { currentWeather, setRefetchWeather };
}

export default useTemperature;
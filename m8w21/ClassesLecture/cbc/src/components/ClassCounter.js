import { Component } from "react";
import ClassFetch from "./ClassFetch";

class ClassCounter extends Component {
    constructor(){
        super();
        this.state = {
            count: 0,
            weather: "Sunny"
        }
    }
    handleClick(){
        this.setState({ count: this.state.count + 1})
    }
    componentDidUpdate(){
        console.log("The component has been updated")
    }
    render(){
        return(
            <div>
                <h2>{this.props.header}</h2>
                <h2>Amount of times the button has been clicked: {this.state.count}</h2>
                <button onClick={()=>this.handleClick()}>Click Me!</button>
                {this.state.count < 3 && <ClassFetch/>}
            </div>
        )
    }
}

export default ClassCounter;
// function Counter(props) {
//     const [count, setCount] = useState(0)
//     const [weather, setWeather] = useState("Sunny")
//     const handleClick = () =>{
//         setCount((prev)=>(prev + 1))
//     }
//     return (
//       <div>
//         {props.header}
//         <h2>Amount of times the button has been clicked: {count}</h2>
//         <button onClick={handleClick}>Click Me!</button>
//       </div>
//     );
//   }
  
//   export default Counter;
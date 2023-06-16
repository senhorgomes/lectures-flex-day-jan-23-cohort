import { Component } from "react";

class ClassFetch extends Component {
    constructor(){
        super();
        this.state = {
            films: [],
        }
    }
    // useEffect(()=>{
    // return ()=>{}
    // }, [])
    componentDidMount(){
       fetch('https://swapi-37eac-default-rtdb.firebaseio.com/movies.json')
       .then(result => result.json())
       .then(data=> this.setState({films: data}))
    }
    // useEffect(()=>{
    // return ()=>{}
    // }, [variable])
    
    // useEffect(()=>{
    // })
    componentDidUpdate(){
        console.log("The component has been updated")
    }


    componentWillUnmount(){
        console.log("The component has been unmounted")
    }
    render() {
        return (
            <section>
                <h2>Functional Movie List</h2>
                {this.state.films.length === 0 && <p>Loading...</p>}
                {this.state.films.length > 0 && <ul>
                    {this.state.films.map(film => <li key={film.id}>
                        {film.title} ({film.alternate_title})
                    </li>)}
                </ul>}
            </section>
        );
    }
}

export default ClassFetch
// function Fetch() {
//     const [films, setFilms] = useState([]);

//     useEffect(() => {
//         fetch('https://swapi-37eac-default-rtdb.firebaseio.com/movies.json')
//             .then(result => result.json())
//             .then(data => setFilms(data));
//     }, []);

//     return (
//         <section>
//             <h2>Functional Movie List</h2>
//             {films.length === 0 && <p>Loading...</p>}
//             {films.length > 0 && <ul>
//                 {films.map(film => <li key={film.id}>
//                     {film.title} ({film.alternate_title})
//                 </li>)}
//             </ul>}
//         </section>
//     );
//   }

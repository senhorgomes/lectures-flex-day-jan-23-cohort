import {useState, useEffect} from 'react';

function Fetch() {
    const [films, setFilms] = useState([]);

    useEffect(() => {
        fetch('https://swapi-37eac-default-rtdb.firebaseio.com/movies.json')
            .then(result => result.json())
            .then(data => setFilms(data));
    }, []);

    return (
        <section>
            <h2>Functional Movie List</h2>
            {films.length === 0 && <p>Loading...</p>}
            {films.length > 0 && <ul>
                {films.map(film => <li key={film.id}>
                    {film.title} ({film.alternate_title})
                </li>)}
            </ul>}
        </section>
    );
  }
  
  export default Fetch;
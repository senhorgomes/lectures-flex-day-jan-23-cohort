import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter'
import ClassCounter from './components/ClassCounter';
import Fetch from './components/Fetch';
import ClassFetch from './components/ClassFetch';
function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Counter /> */}
        <ClassCounter header={"Hello! this is my class component"}/>
        {/* <Fetch/> */}
        {/* <ClassFetch/> */}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {props.sentence}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { BASEURL } from './environments/environments';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img data-cy="App-logo"  src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {BASEURL}
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

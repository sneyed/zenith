import logo from "./logo.svg";
import { Avatar, Button } from "@sneyed/zenith";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Avatar className="avatar" />
          <Button />
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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

import logo from './logo.svg';
import './App.css';

import TextGradient from "hy-textgradient";

function App() {
  return (
    <div className="App">
	  <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
		<TextGradient colors={["#ff0000", "#ffff00", "#00ff00"]} >	
        Your Text To Gradient Here
		</TextGradient>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://github.com/fitri-hy/hy-textgradient.git"
          target="_blank"
          rel="noopener noreferrer"
        >
          Install Package
        </a>
      </header>
    </div>
  );
}

export default App;

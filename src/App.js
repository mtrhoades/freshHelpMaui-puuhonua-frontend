//imports
import './App.css';
import freshHelpMauiLogo from './assets/images/freshHelpMauiLogo.png';
import puuhonuaLogo from './assets/images/puuhonuaLogo.jpg';
import Menu from './components/Menu.js';

function App() {
  return (
    <div className="App">
      <img src={freshHelpMauiLogo}></img>
      <h2>Provides Meals For</h2>
      <img src={puuhonuaLogo}></img>
      <Menu />
    </div>
  );
}

export default App;

//imports
import './App.css';
import freshHelpMauiLogo from './assets/images/freshHelpMauiLogo.png';
import puuhonuaLogo from './assets/images/puuhonuaLogo.jpg';
import Menu from './components/Menu.js';

function App() {
  return (
    <div className="App">
      <img src={freshHelpMauiLogo} alt="fresh help maui logo, fish hook"></img>
      <h2>Provides Meals For</h2>
      <img src={puuhonuaLogo} alt="Pu'uhonua o Nene camp logo, a safe space of refuge"></img>
      <Menu />
    </div>
  );
}

export default App;

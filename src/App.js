import Header from './components/Header'
import Income from './components/Income'
import Insurance from './components/Insurance';
import Reduction from './components/Reduction'
import './App.css'
function App() {
  return (
    <div className="App">
      <Header/>
      <Income/>
      <Insurance/>
      <Reduction/>
      <button>GROSS to NET</button>
    </div>
  );
}

export default App;

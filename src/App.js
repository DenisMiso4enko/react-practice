import './App.css';
import { ToggledPhoneTile } from './PhoneTile';

function App() {
  const phoneSpecs = {
    width: '70mm',
    height: '30mm',
    depth: '15mm',
    screenResolution: '1900x1200',
    battery: '500mA'
  }
  return (
    <div className="App">
      <ToggledPhoneTile specs={phoneSpecs}/>
    </div>
  );
}

export default App;

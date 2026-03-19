import './App.css'
import { useState } from 'react';
import Otsing from "./components/Otsing"
import Plaan from "./components/Plaan";
import Broneering from './components/Broneering';

function App() {
  const [otsinguInfo, setOtsinguInfo] = useState({ aeg: "", inimesed: "1", tsoon: "", privaatne: false, aknaAll: false, lastenurk: false });
  const [broneering, setBroneering] = useState({aeg: "", lauaNr: "",kohti: "", tsoon: "", privaatne: false, aknaAll: false, lastenurk: false });
  
  return (
    <div className="app">
      <Otsing otsinguInfo={otsinguInfo} setOtsinguInfo={setOtsinguInfo} />
      <Plaan otsinguInfo={otsinguInfo} broneering={broneering} setBroneering={setBroneering} />
      <Broneering broneering={broneering} />
    </div>
  )
}

export default App

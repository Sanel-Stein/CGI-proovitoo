import './App.css'

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import { useState } from 'react';
import Otsing from "./components/Otsing"
import Plaan from "./components/Plaan";

function App() {
  const [otsinguInfo, setOtsinguInfo] = useState({ aeg: "", inimesed: "1", tsoon: "" });

  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={<Otsing otsinguInfo={otsinguInfo} setOtsinguInfo={setOtsinguInfo} />} />
        <Route
          path="/plaan"
          element={<Plaan otsinguInfo={otsinguInfo} />} />
        <Route
          path="*"
          element={<Navigate to="/" />}/>
      </Routes>
    </Router>
  )
}

export default App

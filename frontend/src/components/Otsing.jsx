import "./Otsing.css"
import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom';


function Otsing({ otsinguInfo, setOtsinguInfo }) {
  const [aeg, setAeg] = useState("")
  const [inimesed, setInimesed] = useState("1")
  const [tsoon, setTsoon] = useState("")
  const navigate = useNavigate();

  const saadaInfo = (e) => {
    e.preventDefault();
    setOtsinguInfo({ aeg, inimesed, tsoon });
    navigate("/plaan");
  }

  return (
    <div>
      <div>
        <form onSubmit={saadaInfo} className="form">
          <h1>Otsi lauda</h1>
          <div className="rida">
            <label htmlFor="aeg">Kuupäev ja kellaaeg </label>
            <input type="datetime-local"
                id="aeg" 
                value={aeg}
                onChange={(e) => setAeg(e.target.value)}
                required={true}/>
          </div>
          <div className="rida">
            <label htmlFor="inimesed">Inimeste arv </label>
            <select value={inimesed} 
                    id="inimesed"
                    onChange={(e) => setInimesed(e.target.value)}
                    required={true}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              </ select>
          </div>
          <div className="rida">
            <label htmlFor="tsoon">Tsoon </label>
            <select value={tsoon} 
                    id="tsoon"
                    onChange={(e) => setTsoon(e.target.value)}>
              <option value=""></option>
              <option value="terrass">Terrass</option>
              <option value="sisesaal">Sisesaal</option>
              <option value="privaatruum">Privaatruum</option>
            </select>
          </div>
          <button type="submit">Otsi</button>
        </form>
      </div>
    </div>
  )
}

export default Otsing
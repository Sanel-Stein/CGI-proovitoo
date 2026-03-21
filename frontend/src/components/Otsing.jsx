import "./Otsing.css"
import { useState } from "react"

function Otsing({ otsinguInfo, setOtsinguInfo }) {
  const [aeg, setAeg] = useState("")
  const [inimesed, setInimesed] = useState("1")
  const [tsoon, setTsoon] = useState("")
  const [baar, setBaar] = useState(false)
  const [aknaAll, setAknaAll] = useState(false)
  const [lastenurk, setLastenurk] = useState(false)

  const saadaInfo = (e) => {
    e.preventDefault();
    console.log(aeg)
    console.log(new Date())
    if (aeg < new Date().toLocaleString("sv-SE").replace(" ", "T").slice(0,16)) {
      alert("Palun vali tulevane aeg!");
      return;
    }
    setOtsinguInfo({ aeg, inimesed, tsoon, baar, aknaAll, lastenurk });
  }

  return (
    <div>
      <div>
        <form onSubmit={saadaInfo} className="form">
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
              </select>
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
          <div className="rida">
            <label>
              Baari lähedal <input type="checkbox" 
                checked={baar}
                onChange={(e) => setBaar(e.target.checked)} />
            </label>
          </div>
          <div className="rida">
            <label>
              Akna all <input type="checkbox" 
                checked={aknaAll}
                onChange={(e) => setAknaAll(e.target.checked)} />
            </label>
          </div>
          <div className="rida">
            <label>
              Lastenurk <input type="checkbox" 
                checked={lastenurk}
                onChange={(e) => setLastenurk(e.target.checked)} />
            </label>
          </div>
          <button className="nupp" type="submit">Otsi</button>
        </form>
      </div>
    </div>
  )
}

export default Otsing
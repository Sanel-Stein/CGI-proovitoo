import "./Plaan.css"
import { useEffect, useState } from "react"
import { getLauad } from "../services/Api"

function Plaan({ otsinguInfo }) {
    const [lauad, setLauad] = useState([])

    useEffect(() => {
        getLauad().then(data => {
        console.log(otsinguInfo)
        const inimesed = Number(otsinguInfo.inimesed);
        const lauadCopy = data.map(l => 
        ({ ...l, hõivatud: Math.random() < 0.3, soovitatud: false }))
        for (const laud of lauadCopy) {
            if (!laud.hõivatud 
                && laud.kohti >= inimesed 
                && laud.kohti <= inimesed + 3
                && (otsinguInfo.tsoon === '' 
                    || laud.tsoon === otsinguInfo.tsoon)) {
                    laud.soovitatud = true
                }
            }

        setLauad(lauadCopy)} )
    }, [])

  return (
    <>
    <div className="plaan">
      <div>
        <h1>Plaan</h1>
      </div>
      <div className="grid">
        {lauad.map(l => (
          <div 
            key={l.id}
            className={`laud ${l.hõivatud ? "hõivatud" : l.soovitatud ? "soovitatud" : ""}`}>
            {l.kohti}
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default Plaan
import "./Plaan.css"
import { useEffect, useState } from "react"
import { getLauad } from "../services/Api"

function Plaan({ otsinguInfo, broneering, setBroneering}) {
    const [lauad, setLauad] = useState([])

    useEffect(() => {
        getLauad().then(data => {
        const inimesed = Number(otsinguInfo.inimesed);
        const lauadCopy = data.map(l => 
        ({ ...l, hõivatud: Math.random() < 0.3, soovitatud: false }))
        for (const laud of lauadCopy) {
            if (otsinguInfo.aeg === "") {
                laud.tühi = true;
            }
            else if (!laud.hõivatud 
                && laud.kohti >= inimesed 
                && laud.kohti <= inimesed + 3
                && (otsinguInfo.tsoon === '' 
                    || laud.tsoon === otsinguInfo.tsoon)) {
                    laud.soovitatud = true
                }
            }

        setLauad(lauadCopy)} )
    }, [otsinguInfo])

    const kuvaValitudInfo = (laud) => {
        if (!laud.hõivatud && !laud.tühi) {
        setBroneering({aeg: otsinguInfo.aeg,
             lauaNr: laud.id,
             kohti: laud.kohti, 
             tsoon: laud.tsoon, 
             privaatne: laud.privaatne, 
             aknaAll: laud.aknaAll,
             lastenurk: laud.lastenurk})
        }
    }

  return (
    <>
    <div className="plaan">
      <div className="grid">
        {lauad.map(l => (
          <div onClick={() => {kuvaValitudInfo(l)}}
            key={l.id}
            className={`laud ${l.tühi ? "tühi" : l.hõivatud ? "hõivatud" : l.soovitatud ? "soovitatud" : ""}`}>
            {l.kohti}
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default Plaan
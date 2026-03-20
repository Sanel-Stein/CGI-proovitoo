import "./Plaan.css"
import { useEffect, useState } from "react"
import { addBroneering, getBroneeringud, getLauad } from "../services/Api"

function Plaan({ otsinguInfo, setBroneering}) {
    const [lauad, setLauad] = useState([])
    const [broneeringud, setBroneeringud] = useState([])

    useEffect(() => {
        const lae = async () => {
            var broneeringudData = [];
            if (otsinguInfo.aeg != "") {
            broneeringudData = await getBroneeringud(otsinguInfo.aeg);
            setBroneeringud(broneeringudData);
            }
            const lauadData = await getLauad();


            const inimesed = Number(otsinguInfo.inimesed);
            const lauadCopy = lauadData.map(l =>
                ({ ...l, hõivatud: Math.random() < 0.3, soovitatud: false }));
            
            for (const laud of lauadCopy) {
                if (otsinguInfo.aeg === "") {
                    laud.tühi = true;
                }
                if (broneeringudData.some(b => b.laud.id === laud.id)) {
                    laud.hõivatud = true;
                }
                else if (!laud.hõivatud 
                    && laud.kohti >= inimesed 
                    && laud.kohti <= inimesed + 3
                    && (otsinguInfo.tsoon === '' 
                        || laud.tsoon === otsinguInfo.tsoon)) {
                        laud.soovitatud = true
                    }
                }

            setLauad(lauadCopy)};
        lae();
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
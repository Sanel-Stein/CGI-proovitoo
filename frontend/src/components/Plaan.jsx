import "./Plaan.css"
import { useEffect, useState } from "react"
import { getBroneeringud, getLauad } from "../services/Api"

function Plaan({ otsinguInfo, setBroneering}) {
    const [lauad, setLauad] = useState([])

    useEffect(() => {
        const lae = async () => {
            let broneeringudData = [];
            if (otsinguInfo.aeg !== "") {
            broneeringudData = await getBroneeringud(otsinguInfo.aeg);
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
                    && laud.kohti >= inimesed ) {
                        const skoor = arvutaSkoor(laud, otsinguInfo);
                        laud.skoor = skoor;
                    }
                }
            
            let maxSkoor = 0;
            for (const laud of lauadCopy) {
                if (laud.skoor > maxSkoor) {
                    maxSkoor = laud.skoor;
                }
            }

            for (const laud of lauadCopy) {
                if (laud.skoor !== undefined && laud.skoor === maxSkoor) {
                    laud.soovitatud = true;
                    break;
                }
            }

            setLauad(lauadCopy)};
        lae();
    }, [otsinguInfo])

    const arvutaSkoor = (laud, otsinguInfo) => {  
        let skoor = (8 - (laud.kohti - Number(otsinguInfo.inimesed)))/2;
        if (otsinguInfo.tsoon === laud.tsoon || otsinguInfo.tsoon === "") {
            skoor += 2;
        }
        if (otsinguInfo.baar === laud.baar) {
            skoor += 1;
        }
        if (otsinguInfo.aknaAll === laud.aknaAll) {
            skoor += 1;
        }
        if (otsinguInfo.lastenurk === laud.lastenurk) {
            skoor += 1;
        }
        return skoor;
    }


    const kuvaValitudInfo = (laud) => {
        if (!laud.hõivatud && !laud.tühi) {
        setBroneering({aeg: otsinguInfo.aeg,
             lauaNr: laud.id,
             kohti: laud.kohti, 
             tsoon: laud.tsoon, 
             baar: laud.baar, 
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
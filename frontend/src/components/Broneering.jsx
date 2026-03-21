import "./Broneering.css";
import { addBroneering } from "../services/Api";


function Broneering({ broneering }) {
    if (broneering.aeg === "") {
        return null;
    }

    const salvestaBroneering = () => {
        const lauaId = Number(broneering.lauaNr);

        const algus = broneering.aeg;

        const loppDate = new Date(broneering.aeg);
        loppDate.setHours(loppDate.getHours() + 2);
        const lopp = loppDate.toLocaleString("sv-SE").replace(" ", "T").slice(0,16);

        const uusBroneering = {
            broneeringuAlgus: algus,
            broneeringuLopp: lopp,
            laud: { id: lauaId }
        };
        
        addBroneering(uusBroneering).then(res => {
            console.log(res);
        })

    }


    return (
        <div className="broneeringuPaneel">
            <h1>Broneeri laud:</h1>
            <p>Aeg: {broneering.aeg}</p>
            <p>Laua number: {broneering.lauaNr}</p>
            <p>Kohti: {broneering.kohti}</p>
            <p>Tsoon: {broneering.tsoon}</p>
            <p>Baari lähedal: {broneering.baar ? "Jah" : "Ei"}</p>
            <p>Akna all: {broneering.aknaAll ? "Jah" : "Ei"}</p>
            <p>Lastenurk: {broneering.lastenurk ? "Jah" : "Ei"}</p>
            <button className="nupp" onClick={salvestaBroneering}>Broneeri</button>
        </div>
    )
}

export default Broneering
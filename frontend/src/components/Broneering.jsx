import { addBroneering } from "../services/Api";
import { useState } from "react";

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
        <div className="broneerimguPaneel">
            <h1>Broneering</h1>
            <p>Aeg: {broneering.aeg}</p>
            <p>Laua number: {broneering.lauaNr}</p>
            <p>Kohti: {broneering.kohti}</p>
            <p>Tsoon: {broneering.tsoon}</p>
            <p>Privaatne: {broneering.privaatne ? "Jah" : "Ei"}</p>
            <p>Akna all: {broneering.aknaAll ? "Jah" : "Ei"}</p>
            <p>Lastenurk: {broneering.lastenurk ? "Jah" : "Ei"}</p>
            <button onClick={salvestaBroneering}>Broneeri laud</button>
        </div>
    )
}

export default Broneering
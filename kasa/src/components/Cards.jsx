import React from 'react'
import logements from '../datas/logements.json'
import '../styles/Cards.css'

export default function Card ()
{
    return (
        <div className="gallery">
            {logements.map(logement => (

                <a key={logement.id} href={`/logements/${logement.id}`} >
                    <img src={logement.cover} alt="selection d'un logement" />
                    <h3>{logement.title}</h3>
                </a>

            ))}
        </div>
    )
}


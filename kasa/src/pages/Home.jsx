import React from "react"
import Card from '../components/Cards'
import '../styles/Home.css'
import image from '../assets/IMG.png'



export default function Home ()
{

    return (
        
            <div className="container_home">

                <div className="banner">
                    <h1>Chez vous, partout et ailleurs</h1>
                    <img src={image} alt="Une nature représentant des rochers dans l'eau" />
                </div>
            
                    <Card />
            
            </div>

    )
}


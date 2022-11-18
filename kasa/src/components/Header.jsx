import React from 'react'
// import { useParams } from 'react-router-dom'
import logoKasa from '../assets/KASA.png'
import {NavLink} from "react-router-dom"
import '../styles/Header.css'

export default function Header ()
{


    return (

             <header>
                <div className="logo">
                    <img src={ logoKasa } alt="logo Kasa" />
                </div>
                <nav>
                    <NavLink to="/">Accueil</NavLink>
                    <NavLink to="/Apropos">A propos</NavLink>
                </nav>
             </header>
    
    )

}

 
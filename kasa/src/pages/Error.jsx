import React from "react"
import logo from '../assets/404.png'
import { Link } from "react-router-dom"
import '../styles/Error.css'


export default function Error ()
{
    return (
        
            <div className="error">
                <img src={logo} alt="erreur 404" />
                <h1>Oups! La page que vous demandez n'existe pas.</h1>
                <Link to="/">
                    Retourner sur la page d’accueil
                </Link>
            </div>
                
    )
}


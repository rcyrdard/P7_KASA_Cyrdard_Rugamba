import React from "react"
import logo from '../assets/LOGO_Footer.png'
import '../styles/Footer.css'

export default function Footer ()
{

    return (
        <footer>
            <img src={ logo } alt="logo Kasa" />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}


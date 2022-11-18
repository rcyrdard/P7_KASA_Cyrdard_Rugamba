import React from 'react'
import { useState } from 'react'
import arrow from '../assets/Vector_close.png'
import '../styles/Dropdown.css'

export default function Dropdown ( props )
{
    const [ isOpen, setIsOpen ] = useState( false )
    
    return (
        
        <div>
            <div className="dropTitle" >
                { props.title } <img src={ arrow } alt="une flèche" className={isOpen ? 'dropBas' : 'dropHaut' } onClick={ () => setIsOpen(!isOpen )} />
            </div>

            { isOpen &&
                <div className="dropText">{props.text}</div>
            }
        </div>
    )
}

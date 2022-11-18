import React from "react"
import '../styles/Apropos.css'
import image from '../assets/kalen-emsley-Bkci_8qcdvQ-unsplash_2.png'
import Dropdown from "../components/Dropdown"


export default function Apropos ()
{

    return (

        <div className="container-apropos">
            
            <img src={image} alt="Panorama d'une nature d’eau et de roches" />
            
            <div className="container_dropdown">
                <Dropdown title="Fiabilité" text="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes." />
                <Dropdown title="Respect" text="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." />
                <Dropdown title="Service" text="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question." />
                <Dropdown title="Sécurité" text="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établie par nos services. En laissant une note aussi bien à l’hôte qu’au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestiques de nos hôtes." />
            </div>
            
        </div>
    )
}



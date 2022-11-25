import React from "react"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import logements from '../datas/logements.json'
import '../styles/Carrousel.css'
import FlecheGauche from '../assets/Fleche_gauche.png'
import FlecheDroite from '../assets/Fleche_droite.png'


const Carrousel = () =>
{
    
    const [slideIndex, setSlideIndex] = useState(0)
    const params = useParams()
    const logement = logements.find( logement => logement.id === params.id )
    
    useEffect(() => {
        // on affiche la première img si on étais sur la dernière 
        if (slideIndex > logement.pictures.length - 1) {
            setSlideIndex(0)
        }

        // affichage de la dernière img si on est sur la première 
        if (slideIndex < 0) {
            setSlideIndex(logement.pictures.length - 1)
        }
    }, [ slideIndex, logement.pictures.length ] )
    

    return (

        <div className='carroussel'>
            {/* Quand flèche gauche */}
            {logement.pictures.length > 1 ? <img src={FlecheGauche} alt="flèche de gauche" className="fleche-left" onClick={() => setSlideIndex(slideIndex - 1)} /> : null}

            <img src={logement.pictures[slideIndex]} alt="Galerie des différentes pièces du logement" className='carroussel-img' />

             {/* affichage du numeros de l'img dans le span        */}
            {logement.pictures.length > 1 ? <span className="carroussel-span">{ slideIndex + 1}/{logement.pictures.length}</span> : null}
            
            {/* Quand flèche droite  */}
            {logement.pictures.length > 1 ? <img src={FlecheDroite} alt="flèche de droite" className="fleche-right" onClick={() => setSlideIndex(slideIndex + 1)} /> : null}
            
        </div>
    )
}

export default Carrousel
import React from 'react'
// import '../styles/FicheLogement.css'
import '../styles/FicheLogement_2.css'
import Dropdown from '../components/Dropdown'
import logements from '../datas/logements.json'
import { useParams } from 'react-router-dom'
import Star from '../components/Star'
import Tags from '../components/Tags'
import Error from '../pages/Error'
import Carrousel from '../components/Carrousel'


export default function FicheLogement ()
{
       const params = useParams()
       const logement = logements.find( logement => logement.id === params.id )
       
       if (!logement) return <Error />

       return (
        
              <div className="container-fichelogement">
                     
                     <Carrousel />
                     <div className='container-titre-host'>

                            <div className="titre">
                                   {/* titre du logement et sa location */}
                                   <div className="titre-location">
                                          <h1>{logement.title}</h1>
                                          <p>{logement.location}</p>
                                   </div>

                                   <Tags tags={logement.tags} />
                            </div>

                            <div className="host-star">
                                   <div className="host">
                                          <span className="span-host">{logement.host.name}</span>
                                          <img src={logement.host.picture} alt="" />
                                   </div>
                                   <div className="star">
                                          <Star rating={logement.rating} />
                                   </div>
                            </div>
                     </div>
            
                     <div className="dropFichelogement">

                            <div className='dropFiche-Description'>
                                   <Dropdown title="Description" text={logement.description} />
                            </div>

                            <div className='dropFiche-Equipements'>

                                   <Dropdown title="Equipements" text={<ul>{logement.equipments.map((equipment, index) => (
                                   <li key={index}>{equipment}</li>
                                   ))}</ul>}       
                                   />

                            </div>

                     </div>
                     
              </div>  
        
       )
}


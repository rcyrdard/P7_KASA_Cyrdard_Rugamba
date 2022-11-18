
import React from "react";
import RedStar from "../assets/RedStar.png";
import GrayStar from "../assets/GrayStar.png";
import "../styles/Star.css"


export default function Star(props) {

   const quantityStars = [1, 2, 3, 4, 5];

   return (
    quantityStars.map((quantityStar, index) =>
    quantityStar <= Number(props.rating) ? (<img src={RedStar} alt="étoile rouge" className="StarRouge" key={index} />
      ) : (<img src={GrayStar} alt="étoile grise" key={index} className="StarGrise" />)
   ));
}




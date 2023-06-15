import React from 'react';

import "../css/showitemMWK.css"





const ShowitemsMWK = ({ showitems}) => {

  return (
  <> 
    <div className="Showitems-listMWk">

      {showitems.map((showitems) => (

        <div className="Showitems-cardMWk" key={showitems.id}>

          <img className="Showitems-imageMWk" src={showitems.image} alt={showitems.name} />

          <h3 className="Showitems-nameMWk">{showitems.name}</h3>

          <p className="Showitems-descriptionMWk">{showitems.price}</p>

        </div>

      ))}

    </div>
    </>
  );

};




export default ShowitemsMWK;
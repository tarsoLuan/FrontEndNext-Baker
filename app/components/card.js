'use client'

import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const ProductCard = props => {
    console.log('props ->' + JSON.stringify(props));
  return (
    <div>
        <div style={{height:"340px", width:"100%"}} className="flex">
        <div style={{height:"340px", width:"210px"}}>
            <img style={{width:"320px"}} src={props.props.imageurl} alt="Baker Logo" />
        </div>
        <div style={{width:"80%", padding:"0 20px"}}>
            <b style={{fontSize:"50px", color:"white"}}>{props.props.name}</b>
            <p style={{fontSize:"16px", color:"white", minHeight:"130px", lineHeight:"30px", textAlign:"justify"}}>{props.props.description}</p>
            <br></br>
        </div>
        </div>
        <div className="flex items-center justify-center ">
            <button className="bg-[#E89C38] hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                <FontAwesomeIcon icon={faCoffee} />
                <span className="pl-2">Comprar</span>
            </button>
        </div>
    </div>
  );
};

export default ProductCard;
import React, { useState } from 'react';
import "./InteractiveCard.css"



export default function InteractiveCard (props){
  
  const [flipped, setFlipped] = useState(false)

  return (
    <div  className="mainContainer">
      <div onClick={() => {
      setFlipped(!flipped)
      
    }}
    className = {`theCard ${flipped ? ('isFlipped') : ('')}`}>
         
        <div className="theFront" style={{backgroundImage: `url( ${props.service.image})`, backgroundSize: "cover", backgroundPosition: "center", opacity: 0.75,}}>
            <h3 style={{ textAlign: "center", justifyContent: "center", alignItems: "center", fontWeight: "bold", fontFamily: 'Prompt', marginTop: 25}}>{props.service.name}</h3>
          
        </div>
        <div className="theBack" style={{objectFit: "cover"}} > 
          <div style={{padding: 8}}>
            <h4 style={{textAlign: "center", fontFamily: "Changa One"}}> {props.service.name}</h4>
            <p style={{textAlign: "center", fontFamily: 'Prompt'}}> {props.service.description}</p>
          </div>
        </div>
      </div>
    </div>
    
)};
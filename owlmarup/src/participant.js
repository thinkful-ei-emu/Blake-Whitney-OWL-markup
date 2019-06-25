import React from 'react';

function Participant(props){


  return ( 
    <div className="participant">
      <img src={props.person.avatar} alt="person avatar"></img>
      <h2 className="name">{props.person.name}</h2>
      <p className="onStage">{props.person.onStage ? "On Stage" :"In Session"}</p>
    </div>
  );







}

export default Participant;
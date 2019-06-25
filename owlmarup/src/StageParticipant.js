import React from 'react';

function StageParticipant(props) {
// props.person.name, props.person.avatar

  return (
    <div className="on-stage-participant">
      <div className="on-stage-participant-name">
        <span>{props.person.name}</span>
        <div className="mic-bar"></div>
        <img src={props.person.avatar} alt="person avatar"></img>
      </div>
    </div>

  );

}

export default StageParticipant;
import React, { useState } from "react";

function HandleMouseOver(){
  const [state, setState] = useState({ isHover: false });

  return(
    <div>
      <p
        onMouseEnter={() => setState(prev => ({ ...prev, isHover: true }))}
        onMouseLeave={() => setState(prev => ({ ...prev, isHover: false }))}
      >
        Najedź na mnie kursorem!
      </p>
      {state.isHover ? (
        <p>Kursor na tekście powyżej: Tak</p>
      ) : (
        <p>Kursor na tekście powyżej: Nie</p>
      )}
    </div>
  );
}

export default HandleMouseOver;

import React, { useState } from "react";

function HandleClick(){
  const [state, setState] = useState({ counter: 0 });

  return(
    <div>
      <p>Licznik: {state.counter}</p>
      <button onClick={() => setState(prev => ({ ...prev, counter: prev.counter + 1 }))}>
        Zwiększ
      </button>
    </div>
  );
}

export default HandleClick;

import React, { useState } from 'react';

function HandleClick(){
    const [counter, setCounter] = useState(0);

    return(
        <div>
            <p>Licznik: {counter}</p>
            <button onClick={() => setCounter(counter + 1)}>
                Zwiększ
            </button>
        </div>
    )
}

export default HandleClick;
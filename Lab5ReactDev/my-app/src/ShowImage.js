import React, { useState } from 'react';

function ShowImage(){
    const [show, setShow] = useState(false);

    return(
        <div>
            <button onClick={() => setShow(!show)}>
                {show ? 'Ukryj zdjęcie' : 'Pokaż zdjęcie'}
            </button><br></br>
            {show && <img src="/teto.jpg" alt="Teto" width="444" height="444" />}
        </div>
    )
}

export default ShowImage;
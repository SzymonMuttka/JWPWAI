import React, { useState } from 'react';

function HandleMouseOver(){
    const [isHover, setIsHover] = useState(false);

    return(
        <div>
            <p
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
                >test 
            </p>
            {isHover ? <p>Kursor na tekście powyżej: Tak</p> : <p>Kursor na tekście powyżej: Nie</p>}
        </div>
    )
}

export default HandleMouseOver;
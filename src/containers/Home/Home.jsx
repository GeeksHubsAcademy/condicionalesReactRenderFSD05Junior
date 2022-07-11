
import React, { useState, useEffect } from 'react';
import './Home.css';

const Home = () => {

    //Hooks
    const [token, setToken] = useState('');


    //Funciones

    const revelar = () => {

        console.log("holaaaa",token);

        setToken('losEsparragosCrecenFrescos');
    }

    return (
        <div className='homeDesign'>


            {/* Usando el and condicional para el renderizado */}
            {/* {token !== '' &&

                <div>
                    En mi pueblo los zumos valen tres euros.
                </div>
            } */}

            {/* Usando una ternaria condicional .... 
            {token !== ''

                    ? 
                        <div>
                            En mi pueblo los zumos valen tres euros.
                        </div>
                    
                    :

                        <div>
                            En mi pueblo, ir a la plaza vale 20 euros sin zumo.
                        </div>
                
            } */}

            {}

            Lorem fistrum exercitation jarl papaar papaar ut consectetur torpedo. Nisi enim cillum jarl mamaar a gramenawer.
            Por la gloria de mi madre de la pradera tiene musho peligro a gramenawer. Ese hombree está la cosa muy malar llevame al sircoo enim. Sexuarl papaar papaar papaar papaar dolor.

            <div className="designBoton" onClick={()=>revelar()}>...PULSAME Y TE REVELARÉ LA VERDAD...</div>
        </div>
    )
}
export default Home;
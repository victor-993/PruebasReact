import React,{useState} from 'react';

const Contador = () => {

    const [contador, setContador] = useState(0);

    return ( 
        <>
            <h1>Contador {contador}</h1>
            <button
                onClick={() => {if(contador > 0) setContador(contador-1)}}
            >Restar</button>                    
            <button
                onClick={() => setContador(0)}
            >Resetear</button>
             <button
                onClick={() => setContador(contador+1)}
            >Sumar</button> 
        </>
    );
}

 
export default Contador;
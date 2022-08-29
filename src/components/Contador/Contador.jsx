import React from 'react';
import {useState} from 'react';

const Contador = ({stock, onAdd}) => {
    const [count, setCount] = useState(0)
    
    function sumar(){
        if (count < stock)
        setCount(count +1)
    }
    
    function restar(){
        if (count >0)
        setCount(count -1)
    }
    
    function reset(){
        setCount(0)
    }


    return (
        <div className='counter-box'>
            <h1>Contador</h1>
            <p>Stock:{stock} </p>
            <p>Cantidad:{count} </p>
            <div>
                <button className="btn btn-success" onClick={sumar}>+</button>
                <button className="btn btn-secondary" onClick={reset}>reset</button>
                <button className="btn btn-primary" onClick={restar}>-</button>
            </div>
            <div>
                <button className="btn btn-danger" onClick={() => onAdd(count)} >Confirmar</button>
            </div>
        </div>

    );
}

export default Contador;

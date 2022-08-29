import React from 'react';
import { BiMessageRoundedDetail } from 'react-icons/bi';
import Contador from '../Contador/Contador';
import Swal from 'sweetalert2'
const ItemListContainer = () => {
    function onAdd(count){
        Swal.fire(`Se han Seleccionado ${count} productos`)

        }
    
    return (
        <div>
            <Contador stock={5} onAdd={onAdd}/>
        </div>
    );
    }

export default ItemListContainer;

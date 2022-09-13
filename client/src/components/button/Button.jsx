import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'; 
import React, {Fragment} from 'react';


export const Button =({nombre,id})=>{

    return(
        <Fragment>
            <button 
           
            id={id} 
            className="btn btn-primary">
                {nombre}
            </button>
        </Fragment>
    )
}
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'; 
import './label.css';
import React, {Fragment} from 'react';


export const Label =({nombre})=>{

    return(
        <Fragment>
            <label
            className="input-label">
            {nombre}
            
            </label>
        </Fragment>
    )
}


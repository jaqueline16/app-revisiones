import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'; 
import './input.css';
import React, {Fragment} from 'react';


export const Input =({id,value,onChange,name,type})=>{

    return(
        <Fragment>
            <input
            type={type}
            id={id} 
            className="form-control"
            value={value}
            onChange={onChange}
            name={name}
            required>
            </input>
        
        </Fragment>
    )
}




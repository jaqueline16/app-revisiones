import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import '../App.css';

import {Input} from '../components/input/Input.jsx';
import {Label} from '../components/Label/Label.jsx';
import {Button} from '../components/button/Button.jsx'; 

import {useState} from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'; 
import { useNavigate } from 'react-router-dom';

function Login(){

  const [nombre_usuario, setUsernameLog] = useState('');
  const [contrasena, setPasswordLog] = useState('');
  const [msg, setMsg] = useState('');
 
  const navigate=useNavigate();

  const Auth = async (e) => {
      e.preventDefault();
      try {
          await axios.post('http://localhost:8000/login', {
              nombre_usuario: nombre_usuario,
              contrasena: contrasena,
          });
          Swal.fire({
            icon: 'success',
            title: 'Acceso correcto',
            showConfirmButton: false,
            timer: 1500
          })
       
          navigate("/dashboard");
          
      } catch (error) {
          if (error.response) {
              setMsg(error.response.data.msg);
          }
      }
  }
  
    return (
     
    <section className="text-center">
        
      <div className="p-5 bg-image"></div>
       
        <div className="card mx-4 mx-md-5 shadow-5-strong">
          <div className="card-body py-5 px-md-5">
      
            <div className="row d-flex justify-content-center">
              <div className="col-lg-8">
                <h2 className="fw-bold mb-5">Ingresar al Sistema</h2>
                <form onSubmit={Auth}>
                  
                  <div className="form-group">
                        <Input 
                        type={'text'}
                        value={nombre_usuario}
                        onChange={(e)=> setUsernameLog(e.target.value)}/>
                        <Label nombre={'Nombre de usuario'}/>    
                    </div>
                   
                   <br/>
                    <div className="form-group">
                        <Input 
                        type={'password'}
                        value={contrasena}
                        onChange={(e)=> setPasswordLog(e.target.value)}/>
                        <Label nombre={'Contraseña'}></Label>
                    </div>
                    <br/>

                    <Button nombre={'Ingresar'}></Button>
      
                  

                </form>

                <br/>
                <br/>
            
              <p>¿No tienes una cuenta? Regístrate 

              <Link to={'/register'}> 
              aquí

              </Link> 
              
              </p>

              
              </div>
            </div>
          </div>
        </div>
      </section>
      
    )
  }

export default Login;
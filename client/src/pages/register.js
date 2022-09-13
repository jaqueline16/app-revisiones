//import React, { Component } from 'react'
import React from 'react';
import {useState} from 'react';
import axios from 'axios';
import '../App.css';
import Swal from 'sweetalert2';
import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Input} from '../components/input/Input.jsx';
import {Label} from '../components/Label/Label.jsx';
import {Button} from '../components/button/Button.jsx'; 



//ANTERIOR 
/*function Register(){
  
    const [nameReg,setNameReg]=useState(""); 
    const [lastnameReg,setLastnameReg]=useState(""); 
    const [usernameReg,setUsernameReg]=useState(""); 
    const [emailReg,setEmailReg]=useState(""); 
    const [institutionReg,setInstitutionReg]=useState(""); 
    const [passwordReg,setPasswordReg]=useState("");

   const URI='http://localhost:8000/user/'

   const navigate=useNavigate();
    //procedimiento para guardar 

    const guardarRegistro= async(e) =>{
        e.preventDefault()
        await axios.post(URI,{
            nombre:nameReg,
            apellidos:lastnameReg,
            nombre_usuario:usernameReg,
            correo_electronico:emailReg,
            institucion:institutionReg,
            contrasena:passwordReg})

            Swal.fire({
                icon: 'success',
                title: 'Te has registrado exitosamente',
                showConfirmButton: false,
                timer: 1500
              })
           
              navigate('/')

    }

  

    return (
     
      <section className="text-center">
        
        <div className="p-5 bg-image"></div>
       
        <div className="card mx-4 mx-md-5 shadow-5-strong">
          <div className="card-body py-5 px-md-5">
      
            <div className="row d-flex justify-content-center">
              <div className="col-lg-8">
                <h2 className="fw-bold mb-5">Regístrate</h2>
                <form onSubmit={guardarRegistro}>
                  <div className="row">
                    <div className="col-md-6 mb-4">
                    <div className="form-group">
                        <Input 
                        type={'text'}
                        value={nameReg}
                        onChange={(e=>setNameReg(e.target.value))}
                        />
                        <Label nombre={'Nombre'}/> 
                    </div>
                    </div>
                    <div className="col-md-6 mb-4">
                    <div className="form-group">
                        <Input 
                        type={'text'}
                        value={lastnameReg}
                        onChange={(e=>setLastnameReg(e.target.value))}/>
                        <Label nombre={'Apellidos'}/> 
                    </div>
                    </div>
                  </div>
                
      
                  <div className="form-group">
                        <Input 
                        type={'text'}
                        value={usernameReg}
                        onChange={(e=>setUsernameReg(e.target.value))}/>
                        <Label nombre={'Nombre de Usuario'}/> 
                    </div>
                   
                   <br/>
                  
                    <div className="form-group">
                        <Input 
                        type={'email'}
                        value={emailReg}
                        onChange={(e=>setEmailReg(e.target.value))}/>
                        <Label nombre={'Correo Electrónico'}/> 
                    </div>
                    <br/>

                    <div className="form-group">
                        <Input 
                        type={'text'}
                        value={institutionReg}
                        onChange={(e=>setInstitutionReg(e.target.value))}/>
                        <Label nombre={'Institución a la que perteneces'}/> 
                    </div>
                    <br/>

                    <div className="form-group">
                        <Input 
                        type={'password'}
                        value={passwordReg}
                        onChange={(e=>setPasswordReg(e.target.value))}/>
                        <Label nombre={'Contraseña'}/> 
                    </div>
                    <br/>

                  
      
            
      
                    <Button nombre={'Registrarme'}></Button>
      
                  

                </form>

                
              </div>
            </div>
          </div>
        </div>
      </section>
      
    );
}
export default Registrer;*/

function Register(){
  
  const [nombre,setNameReg]=useState(""); 
  const [apellidos,setLastnameReg]=useState(""); 
  const [nombre_usuario,setUsernameReg]=useState(""); 
  const [correo_electronico,setEmailReg]=useState(""); 
  const [institucion,setInstitutionReg]=useState(""); 
  const [contrasena,setPasswordReg]=useState("");
  const [confContrasena,setConfPasswordReg]=useState("");

 
  const URI='http://localhost:8000/users/';
  const navigate=useNavigate();

  const Register= async(e) =>{
      e.preventDefault();
      try{
          await axios.post(URI,{
              nombre:nombre,
              apellidos:apellidos,
              nombre_usuario:nombre_usuario,
              correo_electronico:correo_electronico,
              institucion:institucion,
              contrasena:contrasena,
              confContrasena:confContrasena
            })
            Swal.fire({
              icon: 'success',
              title: 'Te has registrado exitosamente',
              showConfirmButton: false,
              timer: 1500
            })
         
            navigate('/');
           
          }catch(error){
            if(error.response){
              setLastnameReg(error.response.data.msg); 
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
              <h2 className="fw-bold mb-5">Regístrate</h2>
              <form onSubmit={Register}>
                <div className="row">
                  <div className="col-md-6 mb-4">
                  <div className="form-group">
                      <Input 
                      type={'text'}
                      value={nombre}
                      onChange={(e=>setNameReg(e.target.value))}
                      />
                      <Label nombre={'Nombre'}/> 
                  </div>
                  </div>
                  <div className="col-md-6 mb-4">
                  <div className="form-group">
                      <Input 
                      type={'text'}
                      value={apellidos}
                      onChange={(e=>setLastnameReg(e.target.value))}/>
                      <Label nombre={'Apellidos'}/> 
                  </div>
                  </div>
                </div>
              
    
                <div className="form-group">
                      <Input 
                      type={'text'}
                      value={nombre_usuario}
                      onChange={(e=>setUsernameReg(e.target.value))}/>
                      <Label nombre={'Nombre de Usuario'}/> 
                  </div>
                 
                 <br/>
                
                  <div className="form-group">
                      <Input 
                      type={'email'}
                      value={correo_electronico}
                      onChange={(e=>setEmailReg(e.target.value))}/>
                      <Label nombre={'Correo Electrónico'}/> 
                  </div>
                  <br/>

                  <div className="form-group">
                      <Input 
                      type={'text'}
                      value={institucion}
                      onChange={(e=>setInstitutionReg(e.target.value))}/>
                      <Label nombre={'Institución a la que perteneces'}/> 
                  </div>
                  <br/>
                  <div className="row">
                  <div className="col-md-6 mb-4">
                  <div className="form-group">
                      <Input 
                      type={'password'}
                      value={contrasena}
                      onChange={(e=>setPasswordReg(e.target.value))}
                      />
                      <Label nombre={'Contraseña'}/> 
                  </div>
                  </div>
                  <div className="col-md-6 mb-4">
                  <div className="form-group">
                      <Input 
                      type={'password'}
                      value={confContrasena}
                      onChange={(e=>setConfPasswordReg(e.target.value))}/>
                      <Label nombre={'Confirmar Contraseña'}/> 
                  </div>
                  </div>
                </div>   

                  

                
    
          
    
                  <Button nombre={'Registrarme'}></Button>
    
                

              </form>

              
            </div>
          </div>
        </div>
      </div>
    </section>
    
  );
}
export default Register;
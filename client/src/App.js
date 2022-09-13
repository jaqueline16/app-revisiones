import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter,Route,Routes} from 'react-router-dom'
import Login from './pages/login';
import Register from './pages/register.js';



   
function App(){

  return (
  <div>
    <BrowserRouter>
        <div className="App">
          <Routes>
            <Route exact path='/' element={<Login/>} />
            <Route exact path='/register' element={<Register/>} />
          
          </Routes>
        </div>
    </BrowserRouter>
    </div>
   
  );


  }


export default App;


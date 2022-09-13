/*import express from "express";
import cors from "cors"; 
import {conexion} from "./database/database.js";

conexion();

import userRoute from "./routes/usuario.routes.js"

const app=express();

app.set('port', 4000);

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors({origin:"*"}));


app.use('/',userRoute)

app.listen(app.get('port'), ()=>{
    console.log(`Runing server by the port', ${app.get('port')}`);
})*/

//ANTERIOR FUNCONAL 
/*import express from 'express'; 
import cors from 'cors'; 
import conexion from './database/database.js';
import userRoutes from './routes/usuario.routes.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/user',userRoutes); 

try {
    await conexion.authenticate();
    console.log('Conexión exitosa a la bd');
} catch (error) {
    console.log(`El error de conexión es:${error}`);
}

app.get('/', (req,res)=>{
    res.send('HOLA MUNDO')
})

app.listen(8000,()=>{
    console.log('Server running in http://localhost:8000/')
})*/

import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import conexion from "./database/database.js";
import router from "./routes/usuario.routes.js";
dotenv.config();
const app = express(); 


app.use(cors({ credentials:true, origin:'http://localhost:3000' }));
app.use(cookieParser());
app.use(express.json());
app.use(router);
 
app.listen(8000, ()=> console.log('Server running at port 8000'));



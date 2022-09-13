/*import mysql2 from "mysql2";


export const conexion = async ()=>{

    const conn =await mysql2.createConnection({
        host:'localhost',
        database: 'app_revisiones',
        user:'root', 
        password:'',
        
    });

    conn.connect(function(error){
        if(error){
            throw error; 
        }else{
            console.log('Conexion exitosa');
        }
    });
   

};
*/
import { Sequelize } from "sequelize";



const conexion = new Sequelize('app_revisiones', 'root','',{
    host:'localhost',
    dialect:'mysql',
    define: {
        timestamps: false
    }
}); 


export default conexion; 

   
   




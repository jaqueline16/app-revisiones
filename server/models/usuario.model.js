import conexion from "../database/database.js";
import {DataTypes} from "sequelize";

const User = conexion.define('usuarios', {
    id_usuario:{type:DataTypes.INTEGER, primaryKey:true,autoIncreament:true},
    nombre:{type:DataTypes.STRING},
    apellidos:{type:DataTypes.STRING},
    nombre_usuario:{type:DataTypes.CHAR},
    correo_electronico:{type:DataTypes.CHAR},
    institucion:{type:DataTypes.STRING}, 
    contrasena:{type:DataTypes.CHAR},
    refresh_token:{type:DataTypes.TEXT}, 
}, {
    freezeTableName:true
}

);

(async()=>{
    await conexion.sync();
})(); 

export default User;






//ANTERIOR FUNCIONAL 
//import User from "../models/usuario.model.js";

/*registrar un usuario*/
//export const regUser =  async (req,res)=>{
  //  try {
    //    await User.create(req.body)
      //  res.json({
            //"message": "Registro creado correctamente"
        //})
    //} catch (error) {
       // res.json({message:error.message})
    //}
//}

import User from "../models/usuario.model.js"
import bcrypt, { compare } from "bcrypt";
import jwt from "jsonwebtoken";




export const getUsers = async(req, res) => {
    try {
        const users = await User.findAll({
            attributes:['id_usuario','nombre','apellidos', 'nombre_usuario','correo_electronico','institucion','contrasena']
        });
        res.json(users);
    } catch (error) {
        console.log(error);
    }
}
 
export const Register = async(req, res) => {
    const { nombre, apellidos, nombre_usuario,correo_electronico,institucion,contrasena, confContrasena } = req.body;
    if(contrasena !== confContrasena) return res.status(400).json({msg: "Password and Confirm Password do not match"});
    const salt = await bcrypt.genSaltSync();
    const hashContrasena = await bcrypt.hashSync(contrasena, salt);
    try {
        await User.create({
            nombre:nombre,
            apellidos:apellidos,
            nombre_usuario:nombre_usuario,
            correo_electronico:correo_electronico,
            institucion:institucion,
            contrasena:hashContrasena
        });
        res.json({msg: "Registration Successful"});
    } catch (error) {
        console.log(error);
    }
}
 
export const Login = async(req, res) => {
    
    try {
        const user = await User.findOne({
            where:{
                nombre_usuario: req.body.nombre_usuario
            }
        });
        
        console.log(req.body.contrasena);
        console.log(user.contrasena);
        const match = await bcrypt.compareSync(req.body.contrasena, user.contrasena);
        console.log("🚀 ~ file: usuario.controller.js ~ line 80 ~ Login ~ match", match);
        if(!match) {
            return res.status(400).json({msg: "Wrong Password"});
        }else{const userId = user.id_usuario;
            const nombre_usuario = user.nombre_usuario;
        
            const accessToken = jwt.sign({userId, nombre_usuario}, process.env.ACCESS_TOKEN_SECRET,{
                expiresIn: '15s'
            });
            const refreshToken = jwt.sign({userId, nombre_usuario}, process.env.REFRESH_TOKEN_SECRET,{
                expiresIn: '1d'
            });
            await User.update({refresh_token: refreshToken},{
                where:{
                    id: userId
                }
            });
            res.cookie('refreshToken', refreshToken,{
                httpOnly: true,
                maxAge: 24 * 60 * 60 * 1000
            });
            res.json({ accessToken });}
        
    } catch (error) {
        res.status(404).json({msg:"User not found"});
    }
}

 
export const Logout = async(req, res) => {
    const refreshToken = req.cookies.refreshToken;
    if(!refreshToken) return res.sendStatus(204);
    const user = await User.findAll({
        where:{
            refresh_token: refreshToken
        }
    });
    if(!user[0]) return res.sendStatus(204);
    const userId = user[0].id;
    await User.update({refresh_token: null},{
        where:{
            id: userId
        }
    });
    res.clearCookie('refreshToken');
    return res.sendStatus(200);
}




import {  DataTypes } from "sequelize";
import { sequelize } from "../database/db.js";

export const Users = sequelize.define('users' ,{

    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    state:{
        type:DataTypes.BOOLEAN,
        defaultValue:true
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    }

}) 
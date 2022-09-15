import {  DataTypes } from "sequelize";
import { sequelize } from "../database/db.js";

export const Finance = sequelize.define('finances' ,{

    name: {
        type: DataTypes.STRING,
        allowNull:false
    },
    type: {
        type: DataTypes.ENUM({
            values: ['entry' , 'egress']
        }),
       
    },
    total: {
        type: DataTypes.INTEGER
    },
    description:{
        type: DataTypes.STRING,
        allowNull:false
    },
    state:{
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    date:{
        type: DataTypes.STRING,
        allowNull: false
    }

}) 

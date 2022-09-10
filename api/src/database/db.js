import {Sequelize} from 'sequelize';

export const sequelize = new Sequelize(
    'finance',
    'postgres', 
    'russo09',
    {
    host: 'localhost',
    dialect: 'postgres'
    }
);
import express from 'express';
import { sequelize } from './database/db.js';
import app from './app.js'

const server = express();

const PORT = 3000;

//middlewares
server.use(express.json());
server.use(express.urlencoded({extended: false}))




async function main() {
    try {
        await sequelize.sync({force: false});
      app.listen(PORT, () => {
        console.log(`listening on port ${PORT}`)
      })
    }  
     catch (error) {
        console.error('Unable to connect to DataBase:', error)
    }
    
}

 main();
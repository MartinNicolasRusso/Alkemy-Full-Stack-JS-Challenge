import express from 'express';
import { sequelize } from './database/db.js';

const server = express();

const PORT = 3000;

//middlewares
server.use(express.json());
server.use(express.urlencoded({extended: false}))




async function main() {
    try {
        await sequelize.sync({force: false});
      server.listen(PORT, () => {
        console.log(`listening on port ${PORT}`)
      })
    }  
     catch (error) {
        console.error('Unable to connect to DataBase:', error)
    }
    
}

 main();
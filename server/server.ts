import express, { type Application } from 'express';
import cors from 'cors';
import { dbConnection } from '../database/config';

import commentsRouter from '../routes/comments';
import vehiclesRouter from '../routes/vehicles';

export class Server {

    private app: Application;
    private port: string | number | undefined;
    private paths: {
      comments: string;
      vehicles: string;                        
    };

    constructor(){
        this.app = express();
        this.port = process.env.PORT || 3000;

        this.paths = {
            comments: '/api/comments',
            vehicles: '/api/vehicles',        
        };

        //conectar a la base de datos
        this.conectarDB();

        //Middlewares: Funciones que siempre se vana  ejecutar antes de hacer algo
        this.middlewares();

        //rutas de la aplicacion
        this.routes();
    };

    async conectarDB() {

        await dbConnection();

    }

    middlewares() {

        //CORS
        this.app.use( cors() )
        
        //Lectura y parseo del body
        this.app.use( express.json() )

        //directorio publico, use es un middleware
        this.app.use( express.static('public') );

    }

    routes(){
      this.app.use( this.paths.comments , commentsRouter);
      this.app.use( this.paths.vehicles , vehiclesRouter);
    };

    listen() {
        this.app.listen( this.port, () => {
            console.log( 'Servidor corriendo en puerto', this.port );
        });
    }
}
import express, { type Application } from 'express';
import cors from 'cors';
import { dbConnection } from '../database/config';

import commentsRouter from '../routes/comments';
import vehiclesRouter from '../routes/vehicles';
import emailRouter    from    '../routes/email';
import calendarRouter from '../routes/calendar';
import authRouter     from "../routes/auth";

export class Server {

    private app: Application;
    private port: string | number | undefined;
    private paths: {
      comments: string;
      vehicles: string; 
      email:    string; 
      calendar: string;                     
    };

    constructor(){
        this.app = express();
        this.port = process.env.PORT || 3000;

        this.paths = {
            comments: '/api/comments',
            vehicles: '/api/vehicles',
            email:    '/api/email',
            calendar: '/api/calendar'
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
      this.app.use( this.paths.email    , emailRouter);
      this.app.use( this.paths.calendar , calendarRouter);

      //Ruta de oauth, no se usa el objeto this.paths porque la ruta fue especificada en gcp como "/"
      this.app.use('/', authRouter);
    };

    listen() {
        this.app.listen( this.port, () => {
            console.log( 'Servidor corriendo en puerto', this.port );
        });
    }
}
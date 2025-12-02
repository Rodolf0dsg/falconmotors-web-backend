import mongoose from 'mongoose';

export const dbConnection = async () => {

    try {
        const cnnStr = process.env.MONGODB_CNN_STR;
        if (!cnnStr) {
          throw new Error("No se encontró la variable MONGODB_CNN_STR");
        }

        await mongoose.connect(cnnStr);

        console.log('Base de datos online');

    } catch (error) {
        console.log(error);
        throw new Error('Error en la inicializacion de la bd ' + error)
    }

}
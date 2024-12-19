const { MongoClient } = require('mongodb');

exports.handler = async (event, context) => {
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: JSON.stringify({ message: 'Método no permitido' }),
        };
    }

    const { nombre, correo, mensaje } = JSON.parse(event.body);

    // URI de conexión a MongoDB (reemplaza con tus credenciales de MongoDB Atlas)
    const uri = 'mongodb+srv://danjor:<db_password>@cluster0.wx1j9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
    
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        await client.connect();
        const collection = client.db('formularios').collection('resultados');
        
        // Insertar los datos del formulario en MongoDB
        const result = await collection.insertOne({
            nombreCompleto,telefono,lugarNacimiento,edad,estadoCivil,claveElector, ocr,cic,folio,libro,oficialia,fechaRegistro, entidadRegistro,curp,oficina,nombreContacto,telefonoContacto,
            fecha: new Date(),
        });

        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Formulario guardado exitosamente', result }),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Error al guardar los resultados', error }),
        };
    } finally {
        await client.close();
    }
};

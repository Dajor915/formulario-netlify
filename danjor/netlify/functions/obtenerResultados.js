const { MongoClient } = require('mongodb');

exports.handler = async (event, context) => {
    // URI de conexión a MongoDB (reemplaza con tus credenciales de MongoDB Atlas)
    const uri = 'mongodb+srv://danjor:<db_password>@cluster0.wx1j9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
    
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        await client.connect();
        const collection = client.db('formularios').collection('resultados');
        
        // Obtener todos los resultados
        const resultados = await collection.find().toArray();

        return {
            statusCode: 200,
            body: JSON.stringify({ resultados }),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Error al obtener los resultados', error }),
        };
    } finally {
        await client.close();
    }
};

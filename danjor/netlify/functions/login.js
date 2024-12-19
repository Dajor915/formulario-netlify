// netlify/functions/login.js
exports.handler = async function(event, context) {
    const { username, password } = JSON.parse(event.body);

    // Aquí defines las credenciales del administrador
    const adminUsername = "admin";
    const adminPassword = "admin123";  // No uses contraseñas simples en producción

    if (username === adminUsername && password === adminPassword) {
        return {
            statusCode: 200,
            body: JSON.stringify({ success: true, message: "correcto"  })
        };
    } else {
        return {
            statusCode: 401,
            body: JSON.stringify({ success: false, message: "Credenciales incorrectas" })
        };
    }
};

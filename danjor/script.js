const pestañas = document.querySelectorAll('.pestaña');
const subformularios = document.querySelectorAll('.subform');

function mostrarPestaña(index) {
    pestañas.forEach((pestaña, i) => {
        pestaña.style.display = i === index ? 'block' : 'none';
    });
    ocultarSubformularios();
}

function mostrarSubFormulario(index) {
    ocultarSubformularios();
    subformularios[index - 1].style.display = 'block';
}

function ocultarSubformularios() {
    subformularios.forEach(subform => subform.style.display = 'none');
}

// Mostrar la primera pestaña al cargar
mostrarPestaña(0);

document.getElementById('loginForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const response = await fetch('/.netlify/functions/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    });

    const result = await response.json();
    if (result.success) {
        window.location.href = '/resultados.html';  // Redirigir al administrador
    } else {
        alert('Credenciales incorrectas');
    }
});

document.getElementById('formVisa2').addEventListener('submit', async function (event) {
    event.preventDefault();  // Evitar el comportamiento por defecto

    const nombre = document.getElementById('nom').value;
    const correo = document.getElementById('sexo').value;
    const estadoc = document.getElementById('estadoc').value;
    const fechaNacimiento = document.getElementById('fechaNacimineto').value;
    const lugarnac = document.getElementById('lugarnac').value;
    const ciudad = document.getElementById('ciudad').value;
    const estado = document.getElementById('estado').value;
    const pais = document.getElementById('pais').value;
    const nacionalidad = document.getElementById('nacionalidad').value;
    const otrasnacionalidad = document.getElementById('otrasnacionalidad').value;
    const cur = document.getElementById('cur').value;
    const numsoc = document.getElementById('numsocial').value;
    const numid = document.getElementById('numid ').value;
    const direccion = document.getElementById('direccion').value;
    const municipio = document.getElementById('municipio').value;
    const estadoDomicilio = document.getElementById('estadoDomicilio').value;
    const codigoPostal = document.getElementById('codigoPostal').value;
    const telefonoPrimario = document.getElementById('telefonoPrimario').value;
    const telefonoSecundario = document.getElementById('telefonoSecundario').value;
    const telefonotrabajo = document.getElementById('telefonotrabajo').value;
    const telefonoadicional = document.getElementById('telefonoadicional').value;
    const email = document.getElementById('email').value;
    const correoadicional = document.getElementById('correoadicional').value;
    const facebook= document.getElementById('facebook').value;
    const instagram = document.getElementById('instagram').value;
    const twitter = document.getElementById('twitter').value;
    const pasaporteNumero = document.getElementById('pasaporteNumero').value;
    const pasaporteEmision = document.getElementById('pasaporteEmision').value;
    const pasaporteVencimiento = document.getElementById('pasaporteVencimiento').value;

    // Hacer la solicitud POST a la función de Netlify
    const response = await fetch('/.netlify/functions/guardarResultados', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nombre, correo, mensaje }),
    });

    const data = await response.json();
    console.log(data); // Mostrar mensaje de éxito o error
});

document.getElementById('formPasaporte2').addEventListener('submit', async function (event) {
    event.preventDefault();  // Evitar el comportamiento por defecto

    const nombreCompleto = document.getElementById('nom').value;
    const telefono = document.getElementById('telefono').value;
    const lugarNacimiento = document.getElementById('lugarNacimiento').value;
    const edad = document.getElementById('edad').value;
    const estadoCivil = document.getElementById('estadoCivil').value;
    const claveElector = document.getElementById('claveElector').value;
    const ocr = document.getElementById('ocr').value;
    const cic= document.getElementById('cic').value;
    const folio = document.getElementById('folio').value;
    const libro = document.getElementById('libro').value;
    const oficialia = document.getElementById('oficialia').value;
    const fechaRegistro = document.getElementById('fechaRegistro').value;
    const entidadRegistro = document.getElementById('entidadRegistro').value;
    const curp = document.getElementById('curp').value;
    const oficina = document.getElementById('oficina').value;
    const nombreContacto = document.getElementById('nombreContacto').value;
    const telefonoContacto= document.getElementById('telefonoContacto').value;

    // Hacer la solicitud POST a la función de Netlify
    const response = await fetch('/.netlify/functions/guardarResultados', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({nombreCompleto,telefono,lugarNacimiento,edad,estadoCivil,claveElector, ocr,cic,folio,libro,oficialia,fechaRegistro, entidadRegistro,curp,oficina,nombreContacto,telefonoContacto}),
    });

    const data = await response.json();
    console.log(data); // Mostrar mensaje de éxito o error
});
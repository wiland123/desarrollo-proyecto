//declarando variables
const nombre = document.querySelector('#nombre');
const telefono = document.querySelector('#telefono');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

const datos ={
    nombre:'',
    telefono:'',
    email:'',
    mensaje:''    
}

// eventos de variables
nombre.addEventListener('input', imprimirDatos);
telefono.addEventListener('input', imprimirDatos);
email.addEventListener('input', imprimirDatos);
mensaje.addEventListener('input', imprimirDatos);

//evento para validar formulario
formulario.addEventListener('submit', (e)=>{

    e.preventDefault();
    const {nombre, telefono, email, mensaje} = datos;
    if(nombre==='' || telefono==='' || email==='' || mensaje===''){
        enviarAlerta('Todos los campos son obligatorios', true);
        return;
    }

    enviarAlerta('Datos enviados correctamente');
});


function imprimirDatos(e){
    datos[e.target.id] = e.target.value;
}

//Funcion para el error
function enviarAlerta(mensaje, error=false){
    const alerta = document.createElement('P');
    alerta.textContent = mensaje
    if(error){
        alerta.classList.add('error');
    }else{
        alerta.classList.add('correcto');
    }

    formulario.appendChild(alerta);
    setTimeout(()=>{
        alerta.remove();
    }, 2000);    
}   
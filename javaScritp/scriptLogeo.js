
//Declaracion de variables
const usuario = document.querySelector('#usuario');
const contraseña = document.querySelector('#contraseña');
const boton = document.querySelector('.boton');
const logeo = document.querySelector('.logeo');

const datos ={
    usuario:'',
    contraseña:''
}

//eventos de variables
usuario.addEventListener('input', imprimirDatos);
contraseña.addEventListener('input', imprimirDatos);

//evento para validar formulario
boton.addEventListener('click', (e)=>{
    e.preventDefault();
    const {usuario, contraseña} = datos;
    if(usuario=== '' || contraseña===''){
        enviarMensaje('Todos los campos son obligatorios');
        return;
    }

    location.href = 'administradores.html'
});

//funcion para adquirir datos
function imprimirDatos(e){
    datos[e.target.id] = e.target.value;   
}

//funcion para enviar el mensaje de error
function enviarMensaje(mensaje){
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;
    alerta.classList.add('error');
    logeo.appendChild(alerta);    

    setTimeout(()=>{
        alerta.remove()
    },2000);
}

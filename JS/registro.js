/*Creación de variables para guardar y/o almacenar en el local y sesion storage*/

const usuarioGuardado = localStorage.getItem('usuario');
const passwordGuardada = localStorage.getItem('password');

//Iniciar sesion

document.getElementById('loginBtn')?.addEventListener('click', function(){
    const usuario = document.getElementById('loginUsuario').value;
    const password = document.getElementById('loginPassword'.value);

    if (usuario=== usuarioGuardado && password === passwordGuardada){
        //guardar en el sesion Storage
        sessionStorage.setItem('SesionActiva', true);
    
        //Dirigir a la pagina inicio
    
        Window.location.href="../HTML/index.html"
    }else{
        alert('Usuario y/o contraseña incorrecta');
    }    
})

//Cerrar sesion
document.getElementById('cerrarSesionBtn')?.addEventListener('click', 
    function(){
        sessionStorage.removeItem('SesionActiva');
        window.location.href="../HTML/inicioSesion.html";
    }
)

//registrar usuario nuevo

document.getElementById('registrarBtn')?.addEventListener('click', function(){
    const nuevoUsuario = document.getElementById('registroUsuario').value;
    const nuevaContraseña = document.getElementById('registroPassword').value;

    //Guardar los datos local Storage

    if (nuevoUsuario && nuevaContraseña){
        localStorage.setItem('usuario', nuevoUsuario);
        localStorage.setItem('password', nuevaContraseña);
        alert('Usuario registrado');
        window.location.href="../HTML/inicioSesion.html";
    }else{
        alert('Por favor, complete los campos');
    }

})
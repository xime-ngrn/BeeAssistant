

function admin(formulario){
    var accion=document.getElementById("configAdmin").value;
    alert(accion);
    if(accion == 0){
        location.href="administradores/agregarAdmin.html";
    }else if(accion == 1){
        location.href="administradores/eliminarAdmin.html";
    }else{
        location.href="administradores/consultarAdmin.html";
    }
}

function usuario(formulario){
    var accion=document.getElementById("usu").value;
    alert(accion)
    if(accion == 0){
        location.href="usuarios/consultarUsu.html";
    }else{
        location.href="usuarios/eliminarUsu.html";
    }
}

function info(formulario){

}
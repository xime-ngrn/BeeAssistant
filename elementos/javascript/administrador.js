

function admin(formulario){
    var accion=document.getElementById("configAdmin").value;
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
    if(accion == 0){
        location.href="usuarios/consultarUsu.html";
    }else{
        location.href="usuarios/eliminarUsu.html";
    }
}

function selectinfo(formulario){
    var accionInfo=document.querySelector('input[name=informacionRadio]:checked').value;
    alert(accionInfo);

    if(accionInfo==0){
        location.href="informacion/ingresarInfo.html";
    }
    else if(accionInfo==1){
        location.href="informacion/eliminarInfo.html";
    }
    else if(accionInfo==2){
        location.href="informacion/modificarInfo.html";
    }
    else{
        alert("No se ha seleccionado ninguna acción");
    }

}
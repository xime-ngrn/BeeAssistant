

function admin(formulario){
    alert("Redireccion Admin");
    var accion=document.getElementById("configAdmin").value;
    if(accion == 0){
        location.href="administradores/agregarAdmin.html";
        alert("dir agregar");
    }else if(accion == 1){
        location.href="../../Administrador/administradores/eliminarAdmin.html";
        alert("dir eliminar");
    }else if(accion == 2){
        location.href="../../Administrador/administradores/modificarAdmin.html";
        alert("dir modificar");
    }
    else{
        alert("No se ha seleccionado ninguna opción :(");
    }
}

function usuario(formulario){
    alert("Redireccion Usuario");
    var accion=document.getElementById("usu").value;
    if(accion == 0){
        location.href="../../Administrador/usuarios/consultarUsu.html";
    }else{
        location.href="../../Administrador/usuarios/eliminar.html";
    }
}

function selectinfo(formulario){
    alert("Redireccion Info");
    var accionInfo=document.getElementById("infoAdmin").value;

    if(accionInfo==0){
        location.href="informacion/ingresarInfo.html";
    }
    else if(accionInfo==1){
        location.href="informacion/modificarInfo.html";
    }
    else if(accionInfo==2){
        location.href="informacion/eliminarInfo.html";
    }
    else{
        alert("No se ha seleccionado ninguna acción");
    }

}
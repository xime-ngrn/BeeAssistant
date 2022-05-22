
function valUsuario(usuario){
    var usu = usuario;
    var usuCorrecto = /^\d{8,10}/;
    var flag = true;

    if(usuCorrecto.test(usu) == true){
        flag=true;
    }else{
        flag=false;
    }

    return flag;
}


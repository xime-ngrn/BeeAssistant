
function valnbs(prmtr){
    var b = prmtr;
    var flag = true;

    if(b!="" && b!=" "){
        flag = true;
    }else{
        flag = false;
    }

    return flag;
}

function valUsuario(usuario){
    var usu = usuario;
    var usuarioCorrecto = /^\w{5,20}$/;
    var flag = true;

    if(usuarioCorrecto.test(usu) == true){
        flag = true;
    }else{
        flag = false;
    }

    return flag;
}

function valNombresApp(napm){
    var nom = napm;
    var nomCorrecto = /^[A-Z]\w{1,30}/;
    var flag = true;

    if(nomCorrecto.test(nom) == true){
        flag = true;
    }else{
        flag = false;
    }

    return flag;
}

function valPss(pss){
    var con = pss;
    var expPmay=/[A-Z]{1,}/;
    var expPmin=/[a-z]{1,}/;
    var expPnum=/[0-9]{1,}/;
    var flag = true;

    if(con.length>=8 && con.length<=20){
        if(expPmay.test(con) && expPmin.test(con)){
            if(expPnum.test(con) == true){
                flag = true;
            }else{
                flag = false;
            }
        }else{
            flag = flase;
        }
    }else{
        flag = false;
    }

    return flag;
}


function validarInicio(formulario){
    var usuI = document.getElementById("iniBolA").value;
    var pssI = document.getElementById("iniPssA").value;
    var todoValido = true;

    if(valnbs(usuI) == true){
        if(valnbs(pssI) == true){
            todoValido = true;
            document.getElementById("error").innerHTML=""
        }else{
            todoValido = false;
            document.getElementById("iniPssA").focus();
            document.getElementById("error").innerHTML="La contraseña no es válida.";
        }
    }else{
        todoValido = false;
        document.getElementById("iniBolA").focus();
        document.getElementById("error").innerHTML="El usuario no es válido.";
    }

    return todoValido;
}

function validarModidicar(formulario){
    var usuM = document.getElementById("modificarUAdmin").value;
    var nomAM = document.getElementById("modificarNomAdmin").value;
    var pssM = document.getElementById("modificarPssAdmin").value;
    var pssA = document.getElementById("CPssAdmin").value;
    var todoValido = false;

    if(valUsuario(usuM) == true){
        if(valNombresApp(nomAM) == true){
            if(valPss(pssM) == true){
                if(valnbs(pssA) == true){
                    todoValido = true;
                    document.getElementById("error").innerHTML="";
                }else{
                    todoValido = false;
                    document.getElementById("CPssAdmin").focus();
                    document.getElementById("error").innerHTML="Este campo es requerido.";
                }
            }else{
                todoValido = false;
                document.getElementById("modificarPssAdmin").focus();
                document.getElementById("error").innerHTML="Genera una contraseña segura (min 8 caracteres, max 20, 1 minúscula, 1 mayúscula y 1 número).";
            }
        }else{
            todoValido=false;
            document.getElementById("modificarNomAdmin").focus();
            document.getElementById("error").innerHTML="El nombre no es válido. Debe iniciar con mayúscula.";
        }
    }else{
        todoValido = false;
        document.getElementById("modificarUAdmin").focus();
        document.getElementById("error").innerHTML="El usuario no es válido. Debe contener al menos 5 caracteres y máximo 20."
    }
    
    return todoValido;
}

function validarNA(formulario){
    var Ausu = document.getElementById("usuA").value;
    var Anom = document.getElementById("nomA").value;
    var Apss = document.getElementById("pssA").value;
    var pssAA = document.getElementById("APassAdmin").value;
    var todoValido=true;

    if(valUsuario(Ausu) == true){
        if(valNombresApp(Anom) == true){
            if(valPss(Apss) == true){
                if(valnbs(pssAA) == true){
                    todoValido = true;
                    document.getElementById("error").innerHTML="";
                }else{
                    todoValido=false;
                    document.getElementById("APassAdmin").focus();
                    document.getElementById("error").innerHTML="Este campo es requerido.";
                }
            }else{
                todoValido = false;
                document.getElementById("pssA").focus();
                document.getElementById("error").innerHTML="Genera una contraseña segura (min 8 caracteres, max 20, 1 minúscula, 1 mayúscula y 1 número).";
            }
        }else{
            todoValido = false;
            document.getElementById("nomA").focus();
            document.getElementById("error").innerHTML="El nombre no es válido. Debe iniciar con mayúscula.";
        }
    }else{
        todoValido = false;
        document.getElementById("usuA").focus();
        document.getElementById("error").innerHTML="El usuario no es válido. Debe contener al menos 5 caracteres y máximo 20."
    }

    return todoValido;
}

function validarEliminacionA(formulario){
    var usuarioE = document.getElementById("usuAE").value;
    var pssAE = document.getElementById("pssAE").value;
    var todoValido =true;

    if(valnbs(usuarioE) == true){
        if(valnbs(pssAE) == true){
            todoValido=true;
            document.getElementById("error").innerHTML="";
        }else{
            todoValido = false;
            document.getElementById("pssAE").focus();
            document.getElementById("error").innerHTML="Este campo es requerido."
        }
    }else{
        todoValido = false;
        document.getElementById("usuAE").focus();
        document.getElementById("error").innerHTML="El usuario no es válido."
    }

    return todoValido;
}

function validarEliminacionU(formulario){
    var usuarioE = document.getElementById("usuUE").value;
    var pssAE = document.getElementById("pssUE").value;
    var todoValido =true;

    if(valnbs(usuarioE) == true){
        if(valnbs(pssAE) == true){
            todoValido=true;
            document.getElementById("error").innerHTML="";
        }else{
            todoValido = false;
            document.getElementById("pssUE").focus();
            document.getElementById("error").innerHTML="Este campo es requerido."
        }
    }else{
        todoValido = false;
        document.getElementById("usuUE").focus();
        document.getElementById("error").innerHTML="El usuario no es válido."
    }

    return todoValido;
}
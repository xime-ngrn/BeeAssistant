
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

function valBol(boleta){
    var bol = boleta;
    var boletaCorrecta = /^20[0-9]{8}/;
    var flag = true;

    if(boletaCorrecta.test(bol) == true){
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
    var nomCorrecto = /^[A-Z][a-z]{1,30}$/;
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
            flag = false;
        }
    }else{
        flag = false;
    }

    return flag;
}


function validarModidicar(formulario){
    var bolAM = document.getElementById("modificarBolAdmin").value;
    var nomAM = document.getElementById("modificarNomAdmin").value;
    var pssM = document.getElementById("modificarPssAdmin").value;
    var pssA = document.getElementById("CPssAdmin").value;
    var todoValido = false;

    if(valBol(bolAM) == true){
        if (valNombresApp(nomAM) == true) {
            if (valPss(pssM) == true) {
                if (valnbs(pssA) == true) {
                    todoValido = true;
                    document.getElementById("error").innerHTML = "";
                } else {
                    todoValido = false;
                    document.getElementById("CPssAdmin").focus();
                    document.getElementById("error").innerHTML = "Este campo es requerido.";
                }
            } else {
                todoValido = false;
                document.getElementById("modificarPssAdmin").focus();
                document.getElementById("error").innerHTML = "Genera una contraseña segura (min 8 caracteres, max 20, 1 minúscula, 1 mayúscula y 1 número).";
            }
        } else {
            todoValido = false;
            document.getElementById("modificarNomAdmin").focus();
            document.getElementById("error").innerHTML = "El nombre no es válido (debe iniciar con mayúscula, lo demás en minúsculas y no se aceptan acentos).";
        }
    }else{
        todoValido = false;
        document.getElementById("modificarBolAdmin").focus();
        document.getElementById("error").innerHTML = "La boleta no es válida.";
    }
        
    return todoValido;
}

function validarNA(formulario){
    var Aboleta = document.getElementById("bolA").value;
    var Anom = document.getElementById("nomA").value;
    var Apss = document.getElementById("pssA").value;
    var Apss2 = document.getElementById("pssA2").value
    var pssAA = document.getElementById("APassAdmin").value;
    var todoValido=true;
    
    if(valBol(Aboleta) == true){
        if(valNombresApp(Anom) == true){
            if(valPss(Apss) == true){
                if(Apss == Apss2){
                    if(valnbs(pssAA) == true){
                        todoValido = true;
                        document.getElementById("error").innerHTML="";
                    }else{
                        todoValido=false;
                        document.getElementById("APassAdmin").focus();
                        document.getElementById("error").innerHTML="Este campo es requerido.";
                    }
                }else{
                    todoValido=false;
                    document.getElementById("pssA2").focus();
                    document.getElementById("error").innerHTML="Las contraseñas no coinciden.";
                }
            }else{
                todoValido = false;
                document.getElementById("pssA").focus();
                document.getElementById("error").innerHTML="Genera una contraseña segura (min 8 caracteres, max 20, 1 minúscula, 1 mayúscula y 1 número).";
            }
        }else{
            todoValido = false;
            document.getElementById("nomA").focus();
            document.getElementById("error").innerHTML="El nombre no es válido (debe iniciar con mayúscula, lo demás en minúsculas y no se aceptan acentos).";
        }
    }else{
        todoValido = false;
        document.getElementById("bolA").focus();
        document.getElementById("error").innerHTML="La boleta no es válida.";
    }

    return todoValido;
}

function validarEliminacionA(formulario){
    var boletaE = document.getElementById("boletaAE").value;
    var pssAE = document.getElementById("pssAE").value;
    var todoValido =true;

    if(valBol(boletaE) == true){
        if(valnbs(pssAE) == true){
            todoValido=true;
            document.getElementById("error").innerHTML="";
        }else{
            todoValido = false;
            document.getElementById("pssAE").focus();
            document.getElementById("error").innerHTML="Este campo es requerido.";
        }
    }else{
        todoValido = false;
        document.getElementById("boletaAE").focus();
        document.getElementById("error").innerHTML="La boleta no es válida.";
    }

    return todoValido;
}

function validarEliminacionU(formulario){
    var bolE = document.getElementById("bolUE").value;
    var pssAE = document.getElementById("pssUE").value;
    var todoValido =true;

    if(valBol(bolE) == true){
        if(valnbs(pssAE) == true){
            todoValido=true;
            document.getElementById("error").innerHTML="";
        }else{
            todoValido = false;
            document.getElementById("pssUE").focus();
            document.getElementById("error").innerHTML="Este campo es requerido.";
        }
    }else{
        todoValido = false;
        document.getElementById("bolUE").focus();
        document.getElementById("error").innerHTML="El usuario no es válido.";
    }

    return todoValido;
}
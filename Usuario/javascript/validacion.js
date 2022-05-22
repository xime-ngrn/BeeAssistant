
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
            flag = flase;
        }
    }else{
        flag = false;
    }

    return flag;
}


function validarInicio(formulario){
    var boletaUsuario = document.getElementById("iniBolUs").value;
    var pssUsuario = document.getElementById("iniContraseña").value;
    var todoValido = true;

    if(valBol(boletaUsuario) == true){
            if(valnbs(pssUsuario) == true){
                document.getElementById("error").innerHTML="";
                todoValido = true;
            }else{
                todoValido = false;
                document.getElementById("iniContraseña").focus();
                document.getElementById("error").innerHTML="La contraseña no es válida.";
            }
    }else{
        todoValido = false;
        document.getElementById("iniBolUs").focus();
        document.getElementById("error").innerHTML="La boleta no es válida.";
    }

    return todoValido;
}

function validarRegistro(formulario){
    var boletaR = document.getElementById("regBol").value;
    var nombreR = document.getElementById("regNombre").value;
    var appatR = document.getElementById("regappat").value;
    var apmatR = document.getElementById("regapmat").value;
    var pssR = document.getElementById("regpss").value;
    var pssR2 = document.getElementById("regpss2").value;
    var todoValido = true;

    if (valBol(boletaR) == true) {
        if (valNombresApp(nombreR) == true) {
            if (valNombresApp(appatR) == true) {
                if (valNombresApp(apmatR) == true) {
                    if (valPss(pssR) == true) {
                        if (pssR == pssR2) {
                            todoValido = true;
                        } else {
                            todoValido = false;
                            document.getElementById("regpss2").focus();
                            document.getElementById("error").innerHTML = "Las contraseñas no coinciden.";
                        }
                    } else {
                        todoValido = false;
                        document.getElementById("regpss").focus();
                        document.getElementById("error").innerHTML = "Genera una contraseña segura (min 8 caracteres, max 20, 1 minúscula, 1 mayúscula y 1 número)."
                    }
                } else {
                    todoValido = false;
                    document.getElementById("regapmat").focus();
                    document.getElementById("error").innerHTML = "El apellido materno no es válido (debe iniciar con mayúscula, lo demás en minúsculas y no se aceptan acentos).";
                }
            } else {
                todoValido = false;
                document.getElementById("regappat").focus();
                document.getElementById("error").innerHTML = "El apellido paterno no es válido (debe iniciar con mayúscula, lo demás en minúsculas y no se aceptan acentos).";
            }
        } else {
            todoValido = false;
            document.getElementById("regNombre").focus();
            document.getElementById("error").innerHTML = "El nombre no es válido (debe iniciar con mayúscula, lo demás en minúsculas y no se aceptan acentos).";
        }
    } else {
        todoValido = false;
        document.getElementById("regBol").focus();
        document.getElementById("error").innerHTML="La boleta no es válida.";
    }

    return todoValido;
}

function validarModificar(formulario){
    var boletaM = document.getElementById("modificarBol").value;
    var nombreM = document.getElementById("modificarNom").value;
    var appatM = document.getElementById("modificarAppat").value;
    var apmatM = document.getElementById("modificarApmat").value;
    var pssM = document.getElementById("modificarPss").value;
    var todoValido = true;

    if (valBol(boletaM) == true) {
        if (valNombresApp(nombreM) == true) {
            if (valNombresApp(appatM) == true) {
                if (valNombresApp(apmatM) == true) {
                    if (valPss(pssM) == true) {
                        todoValido = true;
                        document.getElementById("error").innerHTML = "";
                    } else {
                        todoValido = false;
                        document.getElementById("modificarPss").focus();
                        document.getElementById("error").innerHTML = "Este campo es requerido.";
                    }
                } else {
                    todoValido = false;
                    document.getElementById("modificarApmat").focus();
                    document.getElementById("error").innerHTML = "El apellido materno no es válido (debe iniciar con mayúscula, lo demás en minúsculas y no se aceptan acentos).";
                }
            } else {
                todoValido = false;
                document.getElementById("modificarAppat").focus();
                document.getElementById("error").innerHTML = "El apellido paterno no es válido (debe iniciar con mayúscula, lo demás en minúsculas y no se aceptan acentos).";
            }
        } else {
            todoValido = false;
            document.getElementById("modificarNom").focus();
            document.getElementById("error").innerHTML = "El nombre no es válido (debe iniciar con mayúscula, lo demás en minúsculas y no se aceptan acentos).";
        }
    } else {
        todoValido = false;
        document.getElementById("modificarBol").focus();
        document.getElementById("error").innerHTML="La boleta no es válida.";
    }

    return todoValido;
}
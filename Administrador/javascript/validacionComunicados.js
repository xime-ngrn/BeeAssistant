
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

function valNombreC(napm){
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

function valEspecificacion(areaE, esp){
    var area = areaE;
    var especificacion = esp;
    var flag = true;

    let especificacionB = ["Matematicas", "Biologia", "Quimica", "Fisica", "Orientacion Juvenil y Profesional", 
                                "Computacion", "Dibujo Tecnico"];
    let especificacionH = ["Ingles", "Filosofia", "Historia de Mexico", "Desarrollo Personal", 
                                    "Desarrollo de Habilidades del Pensamiento", "Expresion Oral y Escrita", 
                                    "Entorno Socioeconómico de Mexico", "Comunicacion Cientifica"];
    let especificacionC = ["Programacion", "Maquinas con Sistemas Automatizados", "Sistemas Digitales", 
                                "Mecatronica", "Desarrollo de Software"];
    let especificacionIE = ["Cursos de Recuperacion", "Talleres Sabatinos", "Tutorias", "Actividades Deportivas", 
                            "Actividades Culturales", "Entrega de Documentacion", "Becas Institucionales", "Becas de Gobierno",
                            "Reuniones Informativas"];

    switch(area){
        case 0:
            for(var i=0; i<especificacionB.length; i++){
                if(especificacionB[i] == especificacion){
                    flag = true;
                    break;
                }else{
                    flag = false;
                }
            }
            break;
        case 1:
            for(var i=0; i<especificacionH.length; i++){
                if(especificacionH[i] == especificacion){
                    flag = true;
                    break;
                }else{
                    flag = false;
                }
            }
            break;
        case 2:
            for(var i=0; i<especificacionC.length; i++){
                if(especificacionC[i] == especificacion){
                    flag = true;
                    break;
                }else{
                    flag = false;
                }
            }
            break;
        case 3:
            for(var i=0; i<especificacionIE.length; i++){
                if(especificacionIE[i] == especificacion){
                    flag = true;
                    break;
                }else{
                    flag = false;
                }
            }
            break;
    }

    return flag;
}

function validarComunicado(formulario){
    var listaArea=document.getElementById("areaII");
    var areaSelect=listaArea.selectedIndex;
    var especificacionII = document.getElementById("especificacionA").value;
    var tituloII = document.getElementById("tituloC").value;
    var descripcionII = document.getElementById("descripcionC").value;
    var organizadoresII = document.getElementById("organizadoresC").value;
    var todoValido = true;
    
    if(valEspecificacion(areaSelect, especificacionII) == true){
        if(valNombreC(tituloII) == true){
            if(valnbs(descripcionII) && descripcionII.length >= 50){
                if(valnbs(organizadoresII) == true){
                    todoValido = true;
                    document.getElementById("error").innerHTML="";
                }else{
                    todoValido=false;
                    document.getElementById("organizadoresC").focus();
                    document.getElementById("error").innerHTML="Este campo es requerido.";
                }
            }else{
                todoValido = false;
                document.getElementById("descripcionC").focus();
                document.getElementById("error").innerHTML="La descripción no es válida. Debe ser mayor a 50 caracteres.";
            }
        }else{
            todoValido = false;
            document.getElementById("tituloC").focus();
            document.getElementById("error").innerHTML="El título no es correcto. Debe iniciar con mayúscula y no ser mayor a 30 caracteres.";
        }
    }else{
        todoValido=false;
        document.getElementById("especificacionA").focus();
        document.getElementById("error").innerHTML="La especificación no es correcta o no coincide. Debe iniciar con mayúscula y no debe tener acentos (ej. Matematicas, Entrega de Documentacion, Ingles)."
    }

    return todoValido;
}

function validarModificarC(formulario){
    var listaArea=document.getElementById("areaMI");
    var areaSelect=listaArea.selectedIndex;
    var especificacionMI = document.getElementById("especificacionAM").value;
    var tituloMI = document.getElementById("tituloCM").value;
    var descripcionMI = document.getElementById("descripcionCM").value;
    var organizadoresMI = document.getElementById("organizadoresCM").value;
    var todoValido=true;

    if(valEspecificacion(areaSelect, especificacionMI) == true){
        if(valNombreC(tituloMI) == true){
            if(valnbs(descripcionMI) && descripcionMI.length >= 50){
                if(valnbs(organizadoresMI)){
                    todoValido=true;
                    document.getElementById("error").innerHTML="";
                }else{
                    todoValido=false;
                    document.getElementById("organizadoresCM").focus();
                    document.getElementById("error").innerHTML="Este campo es requerido.";
                }
            }else{
                todoValido=false;
                document.getElementById("descripcionCM").focus();
                document.getElementById("error").innerHTML="La descripción no es válida. Debe ser mayor a 50 caracteres.";
            }
        }else{
            todoValido = false;
            document.getElementById("tituloCM").focus();
            document.getElementById("error").innerHTML="El título no es correcto. Debe iniciar con mayúscula y no ser mayor a 30 caracteres.";
        }
    }else{
        todoValido=false;
        document.getElementById("especificacionAM").focus();
        document.getElementById("error").innerHTML="La especificación no es correcta o no coincide. Debe iniciar con mayúscula y no debe tener acentos (ej. Matematicas, Entrega de Documentacion, Ingles)."
    }

    return todoValido;
}

function validarEliminacion(formulario){
    var titEC = document.getElementById("tituloEC").value;
    var pssEC = document.getElementById("pssEC").value;
    var pssEC2 = document.getElementById("pssEC2").value;
    var todoValido=false;

    if(valnbs(titEC) == true){
        if(valnbs(pssEC) == true){
            if(valnbs(pssEC2) == true){
                if(pssEC == pssEC2){
                    todoValido=true;
                    document.getElementById("error").innerHTML="";
                }else{
                    todoValido=false;
                    document.getElementById("pssEC2").focus();
                    document.getElementById("error").innerHTML="Las contraseñas no coinciden.";
                }
            }else{
                todoValido=false;
                document.getElementById("pssEC2").focus();
                document.getElementById("error").innerHTML="Este campo es requerido.";
            }
        }else{
            todoValido=false;
            document.getElementById("pssEC").focus();
            document.getElementById("error").innerHTML="Este campo es requerido.";
        }
    }else{
        todoValido=false;
        document.getElementById("tituloEC").focus();
        document.getElementById("error").innerHTML="Este campo es requerido.";
    }

    return todoValido;
}
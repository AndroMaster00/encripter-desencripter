const txtUsuario = document.getElementById("txtUsuario");
const txtResultado = document.getElementById("txtResultado");

const llave = [
    ["e", "enter"],
    ["i","imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]
];

function btnEncriptar() {
    if (!contieneMayuscula(txtUsuario.value) && txtUsuario.value != "") {
        const texto = encriptar(txtUsuario.value);
        txtResultado.style.display = "block";
        document.querySelector(".btnCopiar").style.display = "block";
        document.getElementById("mensaje").style.display = "none";
        txtResultado.value = texto;    
    }else{
        if (txtUsuario.value == "") {
            alert("Ingrese texto a encriptar");    
        }else{
            alert("Se ha ingresado una mayúscula, por favor verifique");
        }
    }
    document.querySelector(".btnCopiar").style.background = "#D8DFE8";
    document.querySelector(".btnCopiar").style.color = "#0a3871";
    document.querySelector(".btnCopiar").textContent = "Copiar";
}

function encriptar(frase) {
    for (let i = 0; i < llave.length; i++) {
        if (frase.includes(llave[i][0])) {
            frase = frase.replaceAll(llave[i][0], llave[i][1]);
        }
    }
    return frase;
}

function btnDesencriptar() {
    if (!contieneMayuscula(txtUsuario.value) && txtUsuario.value != "") {
        const texto = desencriptar(txtUsuario.value);
        txtResultado.style.display = "block";
        document.querySelector(".btnCopiar").style.display = "block";
        document.getElementById("mensaje").style.display = "none";
        txtResultado.value = texto;
    }else{
        if (txtUsuario.value == "") {
            alert("Ingrese texto a desencriptar");    
        }else{
            alert("Se ha ingresado una mayúscula, por favor verifique");
        }
    }
    document.querySelector(".btnCopiar").style.background = "#D8DFE8";
    document.querySelector(".btnCopiar").style.color = "#0a3871";
    document.querySelector(".btnCopiar").textContent = "Copiar";
}

function desencriptar(frase) {
    for (let i = (llave.length - 1); i >=0; i--) {
        if (frase.includes(llave[i][1])) {
            frase = frase.replaceAll(llave[i][1], llave[i][0]);
        }
    }
    return frase;
}

function btnCopiar() {
    navigator.clipboard.writeText(txtResultado.value);
    document.querySelector(".btnCopiar").style.background = "green";
    document.querySelector(".btnCopiar").style.color = "#D8DFE8";
    document.querySelector(".btnCopiar").textContent = "¡Copiado!";
}

function contieneMayuscula(texto) {
    for(i = 0; i <  texto.length; i++){
        if (texto.charAt(i) == texto.charAt(i).toUpperCase()) {
            return true;
        }
    }
    return false;
}
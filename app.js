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
    const texto = encriptar(txtUsuario.value);
    txtResultado.style.display = "block";
    document.querySelector(".btnCopiar").style.display = "block";
    document.getElementById("mensaje").style.display = "none";
    txtResultado.value = texto;
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
    const texto = desencriptar(txtUsuario.value);
    txtResultado.style.display = "block";
    document.querySelector(".btnCopiar").style.display = "block";
    document.getElementById("mensaje").style.display = "none";
    txtResultado.value = texto;
}

function desencriptar(frase) {
    for (let i = (llave.length - 1); i >=0; i--) {
        if (frase.includes(llave[i][1])) {
            frase = frase.replaceAll(llave[i][1], llave[i][0]);
        }
        console.log(i);
    }
    return frase;
}

function btnCopiar() {
    navigator.clipboard.writeText(txtResultado.value);
}
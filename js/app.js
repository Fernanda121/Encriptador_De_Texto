const textoEntrada = document.querySelector(".texto__cifrardo");
const textoSalida = document.querySelector(".texto__descifrado");
const botonCopiar = document.querySelector(".boton__copiar");
const contenedorTarjeta = document.querySelector(".tarjeta__contenedor");

function validarTexto(texto) {
    return /^[a-z\s]+$/.test(texto);
}

function encriptar(texto) {
    const vocales = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"]];
    let textoEncriptado = texto.toLowerCase();

    for (let i = 0; i < vocales.length; i++) {
        textoEncriptado = textoEncriptado.split(vocales[i][0]).join(vocales[i][1]);
    }
    return textoEncriptado;
}

function encriptarTexto() {
    const texto = textoEntrada.value;
    if (validarTexto(texto)) {
        const textoEncriptado = encriptar(texto);
        textoSalida.value = textoEncriptado;
        textoEntrada.value = "";
        botonCopiar.style.visibility = "visible";
        contenedorTarjeta.style.display = "none";
        alert('Texto encriptado');
    } else {
        alert('El texto contiene caracteres inválidos. Use solo letras minúsculas sin acentos.');
    }
}
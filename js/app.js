const textoEntrada = document.querySelector(".texto__cifrado");
const textoSalida = document.querySelector(".texto__descifrado");

function validarTexto(texto){
    return /^[a-z\s]+$/.test(texto);
}
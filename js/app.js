const textoEntrada = document.querySelector(".texto__cifrardo");
const textoSalida = document.querySelector(".texto__descifrado");
const botonCopiar = document.querySelector(".boton__copiar");
const contenedorTarjeta = document.querySelector(".tarjeta__contenedor");

function validarTexto(texto) {
    return /^[a-z\s]+$/.test(texto);
}

function encriptar(texto) {
    const vocales = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
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
        mensajeAlerta('Texto Encriptado','success');
    } else {
        mensajeAlerta('El texto contiene caracteres inválidos. Use solo letras minúsculas sin acentos.','error');
    }
}


function desencriptar(texto) {
    const vocales = [["enter", "e"], ["imes", "i"], ["ai", "a"], ["ober", "o"], ["ufat", "u"]];
    let textoDesencriptado = texto.toLowerCase();

    for (let i = 0; i < vocales.length; i++) {
        textoDesencriptado = textoDesencriptado.split(vocales[i][0]).join(vocales[i][1]);
    }
    return textoDesencriptado;
}

function desencriptarTexto() {
    const texto = textoEntrada.value;
    if (validarTexto(texto)) {
        const textoDesencriptado = desencriptar(texto);
        textoSalida.value = textoDesencriptado;
        textoEntrada.value = "";
        mensajeAlerta('Texto Desencriptado','success');
    } else {
        mensajeAlerta('El texto contiene caracteres inválidos. Use solo letras minúsculas sin acentos.', 'error');
    }
}

function copiarTexto() {
    const texto = textoSalida.value;
    if(texto){
        navigator.clipboard.writeText(texto).then(()=> mensajeAlerta('Texto copiado al portapapeles', 'success'));
    }else{
        mensajeAlerta('Error al copiar el texto', 'error');
    }
}   

function mensajeAlerta(mensaje , tipo ='error'){
    const alerta = document.createElement('div');
    alerta.className = `alerta ${tipo}`;
    alerta.textContent = mensaje;
    document.body.appendChild(alerta);

    setTimeout(() =>{
        alerta.classList.add('mostrar');
        setTimeout(()=>{
            alerta.classList.remove('mostar');
            setTimeout( ()=> alerta.remove(), 300);
        },3000)
    },10)
}
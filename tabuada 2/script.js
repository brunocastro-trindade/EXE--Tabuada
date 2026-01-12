function processarTabuada() {
    limparTela();

    let numero = Number(document.getElementById("numero").value);
    let limite = Number(document.getElementById("limite").value);

    if (!validarCampos(numero, limite)) {
        mostrarErro("Preencha todos os campos.");
        return;
    }

    if (!validarValores(numero, limite)) {
        mostrarErro("Use apenas números positivos.");
        return;
    }

    gerarTabuada(numero, limite);
}

function validarCampos(numero, limite) {
    if (!numero || !limite ) {
        return false;
    }
    return true;
}

function validarValores(numero, limite) {
    if (numero <= 0 || limite <= 0) {
        return false;
    }
    return true;
}

function gerarTabuada(numero, limite) {
    let resultado = document.getElementById("resultado");
    for (let i = 1; i <= limite; i++) {
        resultado.innerHTML +=
            numero + "x" + i + "=" + (numero * i) + "<br>";
    }
}

function mostrarErro(texto) {
    let mensagem = document.getElementById("mensagem");
    mensagem.style.color = "red";
    mensagem.innerHTML = texto;
}

function limparTela() {
    document.getElementById("mensagem").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";
}
let botao = document.getElementById("btnGerar");
let inputNumero = document.getElementById("numero");
let resultado = document.getElementById("resultado");

botao.addEventListener("click", gerarTabuada);

function gerarTabuada() {
    let numero = Number(inputNumero.value);
    resultado.innerHTML = "";
    for (let i = 1; i<= 10; i++) {
        resultado.innerHTML +=
        numero + "x" + i + "=" + (numero * i) + "<br>";

    }
}
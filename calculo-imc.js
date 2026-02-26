



const inputPeso = document.getElementById('weight')
const inputAltura = document.getElementById('height')
const textoResultado = document.getElementById('resultText')
const formulario = document.getElementById('imcForm')



function mostrarResultado(mensagem) {
    textoResultado.textContent = mensagem;
}


function calcularIMC() {

    const peso = parseFloat(inputPeso.value)
    const altura = parseFloat(inputAltura.value)

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        mostrarResultado('Por favor, insira valores válidos.')
        return
    }

    // Calculo
    const imc = peso / (altura * altura);
    let classificacao = ''
    classificacao = classificarIMC(imc)

    mostrarResultado(`Seu IMC é ${imc.toFixed(2)} (${classificacao}).`)



}

function classificarIMC(valorImc) {


    // Classificar o IMC
    if (valorImc < 18.5) return 'Abaixo do peso';
    if (valorImc < 25) return 'Peso normal';
    if (valorImc < 30) return 'Sobrepeso';
    return 'Obesidade';

};





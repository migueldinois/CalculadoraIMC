



const inputPeso = document.getElementById('weight')
const inputAltura = document.getElementById('height')
const textoResultado = document.getElementById('resultText')
const formulario = document.getElementById('calculator__form')



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
    // Classificar o IMC
    if (imc < 18.5) {
        classificacao = 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 25) {
        classificacao = 'Peso normal'
    } else if (imc >= 25 && imc < 30) {
        classificacao = 'Sobrepeso'
    } else {
        classificacao = 'Obesidade'
    }

    mostrarResultado(`Seu IMC é ${imc.toFixed(2)} (${classificacao}).`)


    console.log(`Seu IMC é: ${imc.toFixed(2)}`)
    classificaIMC()
}



function limparCampos(){
    formulario.reset();
    inputPeso.focus();
    mostrarResultado('Preencha todos os campos e clique em "Calcular".')
}

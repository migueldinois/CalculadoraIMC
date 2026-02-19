



const inputPeso = document.getElementById('weight')
const inputAltura = document.getElementById('height')
const textoResultado = document.getElementById('resultText')
const formulario = document.getElementById('calculator__form')



function mostrarResultado(mensagem){
    textoResultado.textContent = mensagem;
}


function calcularIMC() {

    const peso = parseFloat(inputPeso.value)
    const altura = parseFloat(inputAltura.value)
    const imc =  
    console.log(`Seu IMC é: ${imc.toFixed(2)}`)
    classificaIMC()
}



function classificaIMC() {
    let classificacao = 'Dados invalidos'
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

    console.log(`${classificacao}`)

}


const form = document.querySelector("#form");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const pesoInput = document.getElementById('peso').value;
    const alturaInput = document.getElementById('altura').value;
    const imc = (pesoInput / (alturaInput * alturaInput)).toFixed(2);
    const valorSpan = document.querySelector("#valor");

    if (imc < 18.5) {
        valorSpan.textContent = `Seu IMC é: ${imc}  Subpeso`;
    } else if (imc >= 18.5 && imc <= 24.9) {
        valorSpan.textContent = `Seu IMC é: ${imc}  Peso normal`;
    } else if (imc >= 25 && imc <= 29.9) {
        valorSpan.textContent = `Seu IMC é: ${imc}  Sobrepeso`;
    } else {
        valorSpan.textContent = `Seu IMC é: ${imc}  Obesidade`;
    }

});

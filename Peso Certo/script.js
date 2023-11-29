const form = document.querySelector("#form");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const pesoInput = document.getElementById('peso').value;
    const alturaInput = document.getElementById('altura').value;
    const imc = (pesoInput / (alturaInput * alturaInput)).toFixed(2);
    const valorSpan = document.querySelector("#valor");
    valorSpan.textContent = `Seu IMC é: ${imc}`;

}
);
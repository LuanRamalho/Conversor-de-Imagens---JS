document.getElementById('convertButton').addEventListener('click', function() {
    const inputFormat = document.getElementById('inputFormat').value;
    const outputFormat = document.getElementById('outputFormat').value;
    const imageInput = document.getElementById('imageInput');
    const outputDiv = document.getElementById('output');

    if (!imageInput.files || !imageInput.files[0]) {
        alert('Por favor, selecione uma imagem.');
        return;
    }

    const file = imageInput.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        // Simulação de conversão (apenas exibe a imagem original)
        outputDiv.innerHTML = `<img src="${e.target.result}" alt="Imagem Convertida">`;

        console.log(`Convertendo de ${inputFormat} para ${outputFormat}`); // Para depuração

        // Aqui você implementaria a lógica real de conversão
        // Usando bibliotecas ou enviando para um servidor
    }

    reader.readAsDataURL(file);
});
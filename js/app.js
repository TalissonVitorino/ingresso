function comprar() {
    let tipo = document.getElementById('tipo-ingresso');
    let qtd = parseInt(document.getElementById('qtd').value);

    comprarIngresso(qtd, tipo.value)
}

function comprarIngresso(quantidadeAComprar, tipoIngresso) {
    console.log(`qtd-${tipoIngresso}`)
    let quantidadeDisponivel = parseInt(document.getElementById(`qtd-${tipoIngresso}`).textContent);
    if (quantidadeAComprar > quantidadeDisponivel) {
        alert(`Quantidade indisponivel para o tipo ${tipoIngresso}.`);
    } else {
        alert('Compra realizada com sucesso!');
        quantidadeDisponivel = quantidadeDisponivel - quantidadeAComprar;
        document.getElementById(`qtd-${tipoIngresso}`).textContent = quantidadeDisponivel;
    }
}


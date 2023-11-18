/* exported converter */
function converter() {
    var valor = document.getElementById('valor').value;
    var unidadeOrigem = document.getElementById('unidadeOrigem').value;
    var unidadeDestino = document.getElementById('unidadeDestino').value;

    var valorConvertido = converterUnidades(valor, unidadeOrigem, unidadeDestino);

    document.getElementById('resultado').innerText = 'Resultado: ' + valorConvertido;
}

function converterUnidades(valor, unidadeOrigem, unidadeDestino) {
    var valorEmMetros;

    if (unidadeOrigem == 'm') {
        valorEmMetros = valor;
    } else if (unidadeOrigem == 'km') {
        valorEmMetros = valor * 1000;
    } else if (unidadeOrigem == 'cm') {
        valorEmMetros = valor / 100;
    }

    var valorConvertido;

    if (unidadeDestino == 'm') {
        valorConvertido = valorEmMetros;
    } else if (unidadeDestino == 'km') {
        valorConvertido = valorEmMetros / 1000;
    } else if (unidadeDestino == 'cm') {
        valorConvertido = valorEmMetros * 100;
    }

    return valorConvertido;
}

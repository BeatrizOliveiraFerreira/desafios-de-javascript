const valorDinheiro = parseFloat(gets());
const moedaOrigem = gets();
const moedaDestino = gets();

// Verifica se valorDinheiro é um número.
if (!isNaN(valorDinheiro)) {
  // Definição fixa das taxas de câmbio para as moedas:
  const taxaCambioBRLtoUSD = 0.1875;
  const taxaCambioBRLtoEUR = 0.1520;
  const taxaCambioUSDtoBRL = 5.3333;
  const taxaCambioEURtoBRL = 6.5789;

  let valorConvertido;

  // Crie uma estrutura condicional que realize a conversão das moedas:
  if (moedaOrigem === 'BRL' && moedaDestino === 'USD') {
    valorConvertido = valorDinheiro * taxaCambioBRLtoUSD;
  } else if (moedaOrigem === 'BRL' && moedaDestino === 'EUR') {
    valorConvertido = valorDinheiro * taxaCambioBRLtoEUR;
  } else if (moedaOrigem === 'USD' && moedaDestino === 'BRL') {
    valorConvertido = valorDinheiro * taxaCambioUSDtoBRL;
  } else if (moedaOrigem === 'EUR' && moedaDestino === 'BRL') {
    valorConvertido = valorDinheiro * taxaCambioEURtoBRL;
  }

  // Imprima a conversão com duas casas decimais:
  print(`${valorDinheiro} ${moedaOrigem} equivalem a ${valorConvertido.toFixed(2)} ${moedaDestino}.`);
} else {
  print('Por favor, insira um valor válido para a conversão.');
}

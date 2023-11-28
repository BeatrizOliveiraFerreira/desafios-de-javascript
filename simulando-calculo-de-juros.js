const capitalInicial = parseFloat(gets());
const taxaJuros = parseFloat(gets());
const tempoMeses = parseInt(gets());

if (!isNaN(capitalInicial) && !isNaN(taxaJuros) && !isNaN(tempoMeses) && tempoMeses > 0) {
    
  const jurosSimples = (capitalInicial * taxaJuros * tempoMeses) / 100;
  const montanteFinal = capitalInicial + jurosSimples;

  print(`Montante em ${tempoMeses} meses, com R$ ${capitalInicial}.00 iniciais, ${taxaJuros}% juros, e: R$ ${montanteFinal}.00.`);
} else {
  print('Por favor, insira valores validos e um periodo de tempo adequado.');
}
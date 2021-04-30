<p align="center">

<h3 align="center">Comparador entre Salários CLT - Comparador entre propostas de trabalho.</h3>

## Objetivo

<p align="center">
  Com o comparador entre salários CLT, será possível analisar as diferênças remuneratórias do trabalho atual com a nova
  proposta de trabalho.
  <br />
  <br />
  <a href="https://calculo-salario-clt.vercel.app/" target="_blank">View Demo</a>
  |
  <a href="https://github.com/leonardofaria00/calculo-salario-CLT/issues">Report Bug</a>
  |
  <a href="https://github.com/leonardofaria00/calculo-salario-CLT/issues">Request Feature</a>
</p>
</p>

## Motivação

<p>
  Para os profissionais CLT que tem dificuldades de escolher uma proposta de trabalho levando em conta o salário e seus
  benefícios.
  Diferente do <a href="https://www.idinheiro.com.br/calculadoras/calculadora-de-salario-liquido/">Cálculo Salário
    Líquido - iDinheiro</a>, o comparador entre salários é uma solução web que além de calcular os descontos,
  apresentará um comparatívo entre propostas de trabalho para permitir que os profissionais regidos pela
  <a href="http://www.planalto.gov.br/ccivil_03/decreto-lei/del5452.htm" target="_blank">CLT</a>, possam decidir de
  maneira financeira, qual é a proposta mais vantajosa.
</p>

## Descrição

<p>
  O comparador de salário deverá utilizar como base as tabelas atualizadas do INSS e do IRRF para realizar o cálculo
  do salário líquido final, deduzindo todos os descontos, como por exemplo, a alíquita do INSS, alíquota do IRRF e
  parcela dedutivel do IRRF, a quantidade de dependentes, pensão alimenticia, desconto com despesas médicas e plano
  odontológico.
  <br>
  Usando como remuneração o salário bruto, vale alimentação, vale refeição, vale transporte e gratificações.
</p>

### Alíquota do INSS 2021

Até R$ 1.100,00 -> 7,5% <br>
De R$ 1.100,01 à R$ 2.203,48 -> 9% <br>
De R$ 2.203,49 à R$ 3.305,22 -> 12% <br>
De R$ 3.305,23 à R$ 6.4333,70 -> 14% <br>

### Alíquota IRRF 2021

Até R$ 1.903,98 -> isento <br>
De R$ 1.903,99 à R$ 2.826,65 -> 7,5% <br>
De R$ 2.826,66 à R$ 3.751,05 -> 15% <br>
De R$ 3.751,06 à R$ 4.664,68 -> 22,5% <br>
Salário acima de R$ 4.664,68 -> 27,5% <br>

### Parcela Remuneratória

Até R$ 1.903,98 -> isento <br>
De R$ 1.903,99 à R$ 2.826,65 -> R$ 142,80 <br>
De R$ 2.826,66 à R$ 3.751,05 -> R$ 354,80 <br>
De R$ 3.751,06 à R$ 4.664,68 -> R$ 636,13 <br>
Salário acima de R$ 4.664,68 -> R$ 869,36 <br>

### Examplo:

Salário: R$ 6.200,00 <br>
Vale alimentação: R$ 800,00 <br>
Vale refeição: R$ 618,00 <br>
Pensão alimenticia (P.A): R$ 250,00 <br>
Dependentes (D): 1 = R$ 189,59 <br>
INSS: 14% = R$ 1.066,52 <br>
IRRF: 27,5% = R$ 811,41 <br>
Parcela dedutivel do IRRF (PD): R$ 869,36 <br>
Salário líquido calculado (SLF): R$ 6.806,59 <br>

Remuneração (R): salário + vale alimentação + vale refeição = R$ 7.618,00 <br>

Cálculo do INSS <br>
R$ 7.618,00 (R) x 0,14 ou 14% (INSS) = R$ 1.066,52 (desconto do INSS) <br>

Salário líquido (SL) <br>
R$ 7.618,00 (R) - R$ 1.066,52 (INSS) - R$ 189,59 (D) - R$ 250,00 (P.A) = R$ 6.111,89 (SL) <br>

Cálculo IRRF <br>
R$ 6.111,89 (SL) x 0,275 ou 27,5% (IRRF) = R$ 1.680,77 (Base IR) <br>
R$ 1.680,77 (Base IR) - R$ 869,36 (PD) = R$ 811,41 (IRRF) <br>

Salário líquido final (SLF) <br>
R$ 7.618,00 (R) - R$ 811,41 (IRRF) = R$ 6.806,59 (SLF) <br>

## Como contribuir

<p>Leia nosso guia de contribuição [aqui](CONTRIBUTING.md)</p>

## License

Distribuído sob a licença do MIT. Veja `LICENSE` para mais informações.

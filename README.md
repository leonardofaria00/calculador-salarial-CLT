<p align="center">

<h3 align="center">Comparador entre Salários CLT - Comparador entre propostas de trabalho.</h3>

## Objetivo

<p align="center">
  Com o comparador entre salários CLT, será possível analisar as diferênças remuneratórias do trabalho atual com a nova
  proposta de trabalho.
  <br />
  <br />
  <a href="https://comparador-entre-salarios-clt.vercel.app/" target="_blank">View Demo</a>
  |
  <a href="https://github.com/leonardofaria00/comparador-entre-salarios-clt/issues">Report Bug</a>
  |
  <a href="https://github.com/leonardofaria00/comparador-entre-salarios-clt/issues">Request Feature</a>
</p>
</p>

## Protótipos

<div style="text-align: center;">
    <img src="src/assets/images/Proposta-01.png" alt="Tela inicial" width="40%" style="margin: 10px;">
    <img src="src/assets/images/Proposta-02.png" alt="Tela inicial" width="40%" style="margin: 10px;">
    <img src="src/assets/images/Proposta-03.png" alt="Tela inicial" width="40%" style="margin: 10px;">
    <img src="src/assets/images/Proposta-04.png" alt="Tela inicial" width="40%" style="margin: 10px;">
  </div>

## Motivação

<p>
  Para os profissionais CLT que tem dificuldades de escolher uma proposta de trabalho levando em conta o salário e seus
  benefícios.
  Diferente do <a href="https://www.idinheiro.com.br/calculadoras/calculadora-de-salario-liquido/">Cálculo Salário
    Líquido - iDinheiro</a>, o comparador entre salários é uma solução web que além de calcular os descontos,
  apresentará um comparativo entre propostas de trabalho para permitir que os profissionais regidos pela
  <a href="http://www.planalto.gov.br/ccivil_03/decreto-lei/del5452.htm" target="_blank">CLT</a>, possam decidir de
  maneira financeira, qual é a proposta mais vantajosa.<br>
  Será levado em conta todos os descontos do INSS e IRPF bem como os descontos CLT para saber no final o salário liquido. Com isso será possível comparar o que sobra com o salário de outras modalidades trabalhistas que não cobrar tantas taxas e descontos.



O foco é saber quanto o profissional vai receber.
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

### Alíquota IR 2021

Até R$ 1.903,98 -> isento <br>
De R$ 1.903,99 à R$ 2.826,65 -> 7,5% <br>
De R$ 2.826,66 à R$ 3.751,05 -> 15% <br>
De R$ 3.751,06 à R$ 4.664,68 -> 22,5% <br>
Salário acima de R$ 4.664,68 -> 27,5% <br>

### Parcela Dedutível

Até R$ 1.903,98 -> isento <br>
De R$ 1.903,99 à R$ 2.826,65 -> R$ 142,80 <br>
De R$ 2.826,66 à R$ 3.751,05 -> R$ 354,80 <br>
De R$ 3.751,06 à R$ 4.664,68 -> R$ 636,13 <br>
Salário acima de R$ 4.664,68 -> R$ 869,36 <br>

### Dependente

Cada dependente -> R$ 189,59 <br>


### Examplo:

Salário: R$ 6.200,00 <br>
Vale alimentação: R$ 800,00 <br>
Vale refeição: R$ 618,00 <br>
Outras Despesas (O.D): R$ 250,00 <br>
Dependentes (D): 1 = R$ 189,59 <br>
INSS: 14% = R$ 1.066,52 (toda remuneração) <br>
IRRF: 27,5% = R$ 811,41 (cálculo IR) <br>
Parcela dedutivel do IRRF (PD): R$ 869,36 <br>
Salário líquido calculado (SLF): R$ 6.806,59 <br>

Remuneração (R): salário + vale alimentação + vale refeição = R$ 7.618,00 <br>

Cálculo do INSS <br>
R$ 7.618,00 (R) x 0,14 ou 14% (INSS) = R$ 1.066,52 (desconto do INSS) <br>

Salário líquido (SL) <br>
R$ 7.618,00 (R) - R$ 1.066,52 (INSS) - R$ 189,59 (D) - R$ 250,00 (O.D) = R$ 6.111,89 (SL) <br>

Cálculo IR <br>
R$ 6.111,89 (SL) x 0,275 ou 27,5% (IR) = R$ 1.680,77 (Base IR) <br>
R$ 1.680,77 (Base IR) - R$ 869,36 (PD) = R$ 811,41 (IRRF) <br>

Salário líquido final (SLF) <br>
R$ 7.618,00 (R) - R$ 811,41 (IRRF) = R$ 6.806,59 (SLF) <br>

## Como contribuir

Leia nosso guia de contribuição [aqui](CONTRIBUTING.md)

## Contribuidora

| [<img src="https://avatars.githubusercontent.com/u/48295161?v=3&s=115" width="115"><br><sub>@DaytRibeiro </sub>](https://github.com/DaytRibeiro) |
| :----------------------------------------------------------------------------------------------------------------------------------------------: |

## Autor

| [<img src="https://avatars.githubusercontent.com/u/26885558?v=3&s=115"><br><sub>@leonardofaria00</sub>](https://github.com/leonardofaria00) |
| :-----------------------------------------------------------------------------------------------------------------------------------------: |

## License

Distribuído sob a licença do MIT. Veja `LICENSE` para mais informações.

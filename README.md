<p align="center">

<h3 align="center">Calculador de Salário CLT - Comparador entre oportunidades.</h3>

## Objective <br>

<p align="center">
    Este projeto visa calcular e comparar o salário líquido e seus benefícios atuais com uma nova oportunidade de
    trabalho e por fim, mostrar a oportunidade mais vantajosa.
    <br />
    <br />
    <a href="https://calculo-salario-clt.vercel.app/" target="_blank">View Demo</a>
    ·
    <a href="https://github.com/leonardofaria00/calculo-salario-CLT/issues">Report Bug</a>
    ·
    <a href="https://github.com/leonardofaria00/calculo-salario-CLT/issues">Request Feature</a>
  </p>
</p>

## Justification and Motivation <br>

<p>
    Observando a dificuldade de analisar uma oportunidade, considerando o salário e seus benefícios, e por não encontrar
    comparadores de salários eficientes na Web. <br>
    Tomamos a decisão de desenvolver uma solução para facilitar a tomada de decisão do profissional regido pela
    <a href="http://www.planalto.gov.br/ccivil_03/decreto-lei/del5452.htm" target="_blank"> Consolidação das Leis do Trabalho - CLT
    </a>.
</p>

## Description <br>

<p>
    A calculadora de salário deverá utilizar como base as tabelas do INSS e do IRRF (atualizadas) para realizar o
    cálculo do salário líquido final, deduzindo todos os descontos, como por exemplo, a alíquita do INSS, alíquota do
    IRRF e parcela dedutível do IRRF, a quantidade de dependentes e pensão alimentícia.
    <br>
    Usando como remuneração o salário bruto, vale alimentação, vale refeição, vale transporte e gratificações.
</p>

## Alíquota do INSS 2021 <br>

Salário até R$ 1.100,00 -> 7,5% <br>
Salário entre R$ 1.100,01 à R$ 2.203,48 -> 9% <br>
Salário entre R$ 2.203,49 à R$ 3.305,22 -> 12% <br>
Salário entre R$ 3.305,23 à R$ 6.4333,70 -> 14% <br>

## Alíquota IRRF 2021 <br>

Salário até R$ 1.903,98 -> isento <br>
Salário entre R$ 1.903,99 à R$ 2.826,65 -> 7,5% <br>
Salário entre R$ 2.826,66 à R$ 3.751,05 -> 15% <br>
Salário entre R$ 3.751,06 à R$ 4.664,68 -> 22,5% <br>
Salário acima de R$ 4.664,68 -> 27,5% <br>

### Examplo: <br>

Salário: R$ 6.200,00 <br>
Vale alimentação: R$ 800,00 <br>
Vale refeição: R$ 618,00 <br>
Penção alimentícia (P.A): R$ 250,00 <br>
Dependentes (D): 1 = R$ 189,59 <br>
INSS: 14% = R$ 1.066,52 <br>
IRRF: 27,5% = R$ 811,41 <br>
Parcela dedutível do IRRF (PD): R$ 869,36 <br>
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

## Getting Started

<p>Para executar o projeto, é importante atender aos requisitos e instalar as seguintes dependências.</p>

### Prerequisites

- NodeJS
- Visual Studio Code
- Google Chrome

## Installation

### 1. Clone the repository

```sh
git clone https://github.com/leonardofaria00/calculo-salario-CLT.git
```

### 2. Install packages

```sh
npm install
```

### 3. Run API with NodeJS

```sh
npm start
```

## Contributing

As contribuições são o que tornam a comunidade de código aberto como um lugar incrível para aprender, inspirar e criar.
Quaisquer contribuições que você fizer será **muito apreciada**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/develop`)
3. Commit your Changes (`git commit -m 'Add some develop'`)
4. Push to the Branch (`git push origin feature/develop`)
5. Open a Pull Request

## License

Distribuído sob a licença do MIT. Veja `LICENSE` para mais informações.

## Contact

Leonardo F. Santos - [My profile](https://linktr.ee/faria.leo) - leonardofaria00@gmail.com

Project Link:
[https://github.com/leonardofaria00/calculo-salario-CLT](https://github.com/leonardofaria00/calculo-salario-CLT)

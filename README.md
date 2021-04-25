<!-- PROJECT LOGO -->
<br />
<p align="center">
  <!--<a href="https://github.com/leonardofaria00/calculo-salario-CLT">
    <img src="https://angular.io/assets/images/logos/angular/angular.svg" alt="Logo" width="80" height="80">
  </a>-->

  <h3 align="center">CLT salary calculator - Between Job comparator.</h3>

## Objective

  <p align="center">
This project aims to calculate and compare the net wage and its current benefits with a new job opportunity. Finally, show what is the best opportunity.

<br/>
    <a href="https://calculo-salario-clt.vercel.app/" target="_blank">View Demo</a>
    ·
    <a href="https://github.com/leonardofaria00/calculo-salario-CLT/issues">Report Bug</a>
    ·
    <a href="https://github.com/leonardofaria00/calculo-salario-CLT/issues">Request Feature</a>
  </p>
</p>

## Justification and Motivation

Observing the difficulty of describing an opportunity, taking into account the salary and its benefits, and for not finding comparators of effective wages on the web, we make the decision to develop a solution to facilitate the decision-making of the proffection that adopt the <a src="http://www.planalto.gov.br/ccivil_03/decreto-lei/del5452.htm"> Consolidation of work laws - CLT </a>.

## Description

The Salary Calculator CLT seeks the INSS and IRRF rate, then a multiplication between the crude salary and the rates to reach the discounted foil.

## INSS aliquot

Salary up to R$ 1,100.00 -> 7.5% <br>
Salary between R$ 1,100.01 to R $ 2,203,48 -> 9% <br>
Salary between R$ 2,203.49 up to R $ 3,305,22 -> 12% <br>
Salary between R$ 3,305,23 to R $ 6,433,57 -> 14% <br>

## IRRF aliquot

Salary up to R$ 1,903.98 -> free <br>
Salary between R$ 1,903.99 to R $ 2,826.65 -> 7.5% <br>
Salary between R$ 2,826.66 to R $ 3,751,05 -> 15% <br>
Salary between R$ 3,751,06 up to R $ 4,664,68 -> 22.5% <br>
Salary above R$ 4,664.68 -> 27.5% <br>

### Example:

Deduction = R $ 1,100.00 x 7.5% <br>
Deduction = R $ 82,50 <br>

## Getting Started

To run the project it is important to meet the requirements by installing the following dependencies.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

- npm
- Angular
- eslint
- typescript
- node
- editorconfig extension for VSCode.

### npm

```sh
npm init
npm install npm@latest -g
```

### ESlint

```sh
npm install -D eslint
npx eslint --init
```

### TypeScript

```sh
npm install -D typescript
tsc --init
```

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

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->

## Contact

Leonardo F. Santos - [My profile](https://linktr.ee/faria.leo) - leonardofaria00@gmail.com

Project Link: [https://github.com/leonardofaria00/calculo-salario-CLT](https://github.com/leonardofaria00/calculo-salario-CLT)

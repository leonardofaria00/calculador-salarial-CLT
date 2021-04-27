export class INSS {
  aliquota: AliquotaINSS = new AliquotaINSS();
}

export class IRRF {
  aliquota: AliquotaIRRF = new AliquotaIRRF();
  dependentes: number = 0;
  parcelaDedutivel: number = 0;
}

export type keyRemuneracao = 'salario' | 'valeAlimentacao' | 'valeRefeicao';

export type Remuneracao = {
  [key in keyRemuneracao]: string;
};

export class Despesas {
  pensaoAlimenticia: number = 0;
}

export class CategoriaINSS {
  categoria1: number[] = [1100];
  categoria2: number[] = [1100.1, 2203.48];
  categoria3: number[] = [2203.49, 3305.22];
  categoria4: number[] = [3305.23, 64333.7];
}

export class CategoriaIRRF {
  categoria1: number[] = [1903.98];
  categoria2: number[] = [1903.99, 2826.65];
  categoria3: number[] = [2826.66, 3751.05];
  categoria4: number[] = [3751.06, 4664.68];
}

export class AliquotaINSS {
  aliquota1: number = 0.75;
  aliquota2: number = 0.9;
  aliquota3: number = 0.12;
  aliquota4: number = 0.14;
}

export class AliquotaIRRF {
  aliquota1: number = 0;
  aliquota2: number = 0.75;
  aliquota3: number = 0.15;
  aliquota4: number = 0.225;
  aliquota5: number = 0.275;
}

export class ParcelaDedutivel {
  parcelaDeduivel1: number = 0;
  parcelaDeduivel2: number = 142.8;
  parcelaDeduivel3: number = 354.8;
  parcelaDeduivel4: number = 636.13;
  parcelaDeduivel5: number = 869.36;
}

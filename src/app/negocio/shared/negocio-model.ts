export class INSS {
  aliquota: AliquotaINSS = new AliquotaINSS();
  categoria: CategoriaINSS = new CategoriaINSS();
}

export class IRRF {
  aliquota: AliquotaIRRF = new AliquotaIRRF();
  categoria: CategoriaIRRF = new CategoriaIRRF();

  parcelaDedutivel: ParcelaDedutivel = new ParcelaDedutivel();
}

export class RemuneracaoAtual /*implements RemuneracaoAbstract*/ {
  salarioAtual: number = 0;
  valeRefeicaoAtual: number = 0;
  valeAlimentacaoAtual: number = 0;
  dependenteAtual: Dependente = new Dependente();
  outrasDespesasAtual: number = 0;
}
export class RemuneracaoFuturo /*implements RemuneracaoAbstract*/ {
  salarioFuturo: number = 0;
  valeRefeicaoFuturo: number = 0;
  valeAlimentacaoFuturo: number = 0;
  dependenteFuturo: Dependente = new Dependente();
  outrasDespesasFuturo: number = 0;
}

export class Despesas {
  pensaoAlimenticia: number = 0;
}

export class CategoriaINSS {
  categoria1: number[] = [1100];
  categoria2: number[] = [1100.1, 2203.48];
  categoria3: number[] = [2203.49, 3305.22];
  categoria4: number[] = [3305.23, 64333.7];
}
export class AliquotaINSS {
  aliquota1: number = 75;
  aliquota2: number = 0.9;
  aliquota3: number = 0.12;
  aliquota4: number = 0.14;
}

export class CategoriaIRRF {
  categoria1: number[] = [1903.98];
  categoria2: number[] = [1903.99, 2826.65];
  categoria3: number[] = [2826.66, 3751.05];
  categoria4: number[] = [3751.06, 4664.68];
  categoria5: number[] = [4664.68];
}

export class AliquotaIRRF {
  aliquota1: number = 0;
  aliquota2: number = 75;
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

export class Dependente {
  qntDependente: number = 0;
  valorPorDependente: number = 189.59;
}

export interface RemuneracaoInterface {
  calculaSalario(): void;
}
export abstract class RemuneracaoAbstract implements RemuneracaoInterface {
  calculaSalario(): void {
    throw new Error('Method not implemented.');
  }
}

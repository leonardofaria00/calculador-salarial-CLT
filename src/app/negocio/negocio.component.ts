import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { faBalanceScale } from '@fortawesome/free-solid-svg-icons';
import {
  INSS,
  IRRF,
  RemuneracaoAtual,
  RemuneracaoFuturo,
} from './shared/negocio-model';

@Component({
  selector: 'app-negocio',
  templateUrl: './negocio.component.html',
  styleUrls: ['./negocio.component.css'],
})
export class NegocioComponent implements OnInit {
  public fabalancescale = faBalanceScale;
  public formulario: FormGroup = new FormGroup({});
  public remuneracaoAtual: RemuneracaoAtual = new RemuneracaoAtual();
  // public remuneracaoFuturo: RemuneracaoFuturo = new RemuneracaoFuturo();
  public aliquotaINSS: number = 0;
  public aliquotaIRRF: number = 0;
  public parcelaDeduivel: number = 0;
  public valorDependente: number = 0;
  public remuneracaoTotal: number = 0;
  public salarioLiquido: number = 0;
  public descontoINSS: number = 0;
  public valorBaseIR: number = 0;
  public descontoIRRF: number = 0;
  public salarioLiquidoFinal: number = 0;
  public exibeTabela: boolean = false;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.formulario = this._formBuilder.group({
      salarioAtual: [],
      valeRefeicaoAtual: [],
      valeAlimentacaoAtual: [],
      qntDependente: [],
      // salarioFuturo: [],
      // valeRefeicaoFuturo: [],
      // valeAlimentacaoFuturo: [],
      outrasDespesas: [],
    });
  }

  public calcular(): void {
    this.reset();
    this._setRemuneracaoAtual();
    // this._setRemuneracaoFuturo();
    this._calculaRemuneracao();
    this._getAliquotaINSS(this.remuneracaoTotal);
    this._getValorDependente(this.remuneracaoAtual);
    this._calculaSalarioLiquido();
    this._getAliquotaIRRF(this.salarioLiquido);
    this._calculaBaseIR(this.aliquotaIRRF, this.salarioLiquido);
    this._getParcelaDedutivel(this.aliquotaIRRF);
    this._calculaIRRF(this.valorBaseIR, this.parcelaDeduivel);
    this._calculaSalarioLiquidoFinal(this.remuneracaoTotal, this.descontoIRRF);
    this.exibeTabela = true;
  }

  private _setRemuneracaoAtual(): void {
    this.remuneracaoAtual.salarioAtual = parseInt(
      this.formulario.get('salarioAtual')?.value
    );
    this.remuneracaoAtual.valeRefeicaoAtual = parseInt(
      this.formulario.get('valeRefeicaoAtual')?.value
    );
    this.remuneracaoAtual.valeAlimentacaoAtual = parseInt(
      this.formulario.get('valeAlimentacaoAtual')?.value
    );
    this.remuneracaoAtual.dependente.qntDependente = parseInt(
      this.formulario.get('qntDependente')?.value
    );
    this.remuneracaoAtual.outrasDespesas = parseInt(
      this.formulario.get('outrasDespesas')?.value
    );
  }

  // private _setRemuneracaoFuturo():void {
  //   this.remuneracaoFuturo.salarioFuturo =
  //     this.formulario.get('salarioFuturo')?.value;
  //   this.remuneracaoFuturo.valeRefeicaoFuturo =
  //     this.formulario.get('valeRefeicaoFuturo')?.value;
  //   this.remuneracaoFuturo.valeAlimentacaoFuturo = this.formulario.get(
  //     'valeAlimentacaoFuturo'
  //   )?.value;
  // }

  private _calculaRemuneracao(): void {
    this.remuneracaoTotal =
      this.remuneracaoAtual.salarioAtual +
      this.remuneracaoAtual.valeRefeicaoAtual +
      this.remuneracaoAtual.valeAlimentacaoAtual;
  }

  private _calculaSalarioLiquido(): void {
    this.salarioLiquido =
      this.remuneracaoTotal -
      this.descontoINSS -
      this.valorDependente -
      this.remuneracaoAtual.outrasDespesas;
  }

  private _getAliquotaINSS(remuneracao: number): void {
    let inss: INSS = new INSS();

    if (remuneracao <= inss.categoria.categoria1[0]) {
      this.aliquotaINSS = inss.aliquota.aliquota1; // 7,5%
    }

    if (
      remuneracao >= inss.categoria.categoria2[0] &&
      remuneracao <= inss.categoria.categoria2[1]
    ) {
      this.aliquotaINSS = inss.aliquota.aliquota2; //9%
    }
    if (
      remuneracao >= inss.categoria.categoria3[0] &&
      remuneracao <= inss.categoria.categoria3[1]
    ) {
      this.aliquotaINSS = inss.aliquota.aliquota3; //12%
    }
    if (remuneracao >= inss.categoria.categoria4[0]) {
      this.aliquotaINSS = inss.aliquota.aliquota4; //14%
    }

    this._calculaINSS(remuneracao, this.aliquotaINSS);
  }

  private _calculaINSS(aliquotaINSS: number, remuneracao: number): void {
    this.descontoINSS = aliquotaINSS * remuneracao;
  }

  private _getAliquotaIRRF(salarioLiquido: number): void {
    let irrf: IRRF = new IRRF();

    if (salarioLiquido <= irrf.categoria.categoria1[0]) {
      this.aliquotaIRRF = irrf.aliquota.aliquota1; // 0
    }

    if (
      salarioLiquido >= irrf.categoria.categoria2[0] &&
      salarioLiquido <= irrf.categoria.categoria2[1]
    ) {
      this.aliquotaIRRF = irrf.aliquota.aliquota2; //7,5%
    }
    if (
      salarioLiquido >= irrf.categoria.categoria3[0] &&
      salarioLiquido <= irrf.categoria.categoria3[1]
    ) {
      this.aliquotaIRRF = irrf.aliquota.aliquota3; //15%
    }
    if (
      salarioLiquido >= irrf.categoria.categoria4[0] &&
      salarioLiquido <= irrf.categoria.categoria4[1]
    ) {
      this.aliquotaIRRF = irrf.aliquota.aliquota4; //22,5%
    }
    if (salarioLiquido > irrf.categoria.categoria5[0]) {
      this.aliquotaIRRF = irrf.aliquota.aliquota5; //27,5%
    }
  }

  private _calculaBaseIR(aliquotaIRRF: number, salarioLiquido: number): void {
    this.valorBaseIR = salarioLiquido * aliquotaIRRF;
  }

  private _getParcelaDedutivel(aliquotaIRRF: number): void {
    let irrf: IRRF = new IRRF();
    switch (aliquotaIRRF) {
      case irrf.aliquota.aliquota1:
        this.parcelaDeduivel = irrf.parcelaDedutivel.parcelaDeduivel1;
        break;
      case irrf.aliquota.aliquota2:
        this.parcelaDeduivel = irrf.parcelaDedutivel.parcelaDeduivel2;
        break;
      case irrf.aliquota.aliquota3:
        this.parcelaDeduivel = irrf.parcelaDedutivel.parcelaDeduivel3;
        break;
      case irrf.aliquota.aliquota4:
        this.parcelaDeduivel = irrf.parcelaDedutivel.parcelaDeduivel4;
        break;
      case irrf.aliquota.aliquota5:
        this.parcelaDeduivel = irrf.parcelaDedutivel.parcelaDeduivel5;
        break;
    }
  }

  private _getValorDependente(remuneracao: RemuneracaoAtual): void {
    for (let i = 0; i < remuneracao.dependente.qntDependente; i++) {
      this.valorDependente += remuneracao.dependente.valorPorDependente;
    }
  }

  private _calculaIRRF(valorBaseIR: number, parcelaDedutivel: number): void {
    this.descontoIRRF = valorBaseIR - parcelaDedutivel;
  }

  private _calculaSalarioLiquidoFinal(
    remuneracao: number,
    descontoINSS: number
  ): void {
    this.salarioLiquidoFinal = remuneracao - descontoINSS;
  }

  public reset(): void {
    new INSS();
    new IRRF();
    new RemuneracaoAtual();
    // new RemuneracaoFuturo();
  }

  public hidenTable() {
    this.exibeTabela = false;
  }
}

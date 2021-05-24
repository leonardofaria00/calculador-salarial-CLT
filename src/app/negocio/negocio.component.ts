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
  public remuneracaoFuturo: RemuneracaoFuturo = new RemuneracaoFuturo();
  public aliquotaINSS: number = 0;
  public aliquotaIRRF: number = 0;
  public parcelaDeduivel: number = 0;
  public valorDependente: number = 0;
  public remuneracaoTotalAtual: number = 0;
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
      qntDependenteAtual: [],
      outrasDespesasAtual: [],

      salarioFuturo: [],
      valeRefeicaoFuturo: [],
      valeAlimentacaoFuturo: [],
      qntDependenteFuturo: [],
      outrasDespesasFuturo: [],
    });
  }

  public calcular(): void {
    this.reset();
    this._calculaSalarioAtual();
    this._calculaSalarioFuturo();

    this.exibeTabela = true;
  }

  private _calculaSalarioAtual() {
    const remuneracaoAtual: RemuneracaoAtual = this._setRemuneracaoAtual();
    this.remuneracaoTotalAtual =
      this._calculaRemuneracaoAtual(remuneracaoAtual);
    this._getAliquotaINSS(this.remuneracaoTotalAtual);
    this.valorDependente = this._getValorDependente(this.remuneracaoAtual);
    this.salarioLiquido = this._calculaSalarioLiquido(
      this.remuneracaoAtual,
      this.remuneracaoTotalAtual,
      this.descontoINSS,
      this.valorDependente
    );
    this.aliquotaIRRF = this._getAliquotaIRRF(this.salarioLiquido);
    this.valorBaseIR = this._calculaBaseIR(
      this.aliquotaIRRF,
      this.salarioLiquido
    );
    this.parcelaDeduivel = this._getParcelaDedutivel(this.aliquotaIRRF);
    this.descontoIRRF = this._calculaIRRF(
      this.valorBaseIR,
      this.parcelaDeduivel
    );
    this.salarioLiquidoFinal = this._calculaSalarioLiquidoFinal(
      this.remuneracaoTotalAtual,
      this.descontoIRRF
    );
  }

  private _calculaSalarioFuturo() {
    this._setRemuneracaoFuturo();
  }

  private _setRemuneracaoAtual(): RemuneracaoAtual {
    this.remuneracaoAtual.salarioAtual = parseInt(
      this.formulario.get('salarioAtual')?.value
    );
    this.remuneracaoAtual.valeRefeicaoAtual = parseInt(
      this.formulario.get('valeRefeicaoAtual')?.value
    );
    this.remuneracaoAtual.valeAlimentacaoAtual = parseInt(
      this.formulario.get('valeAlimentacaoAtual')?.value
    );
    this.remuneracaoAtual.dependenteAtual.qntDependente = parseInt(
      this.formulario.get('qntDependenteAtual')?.value
    );
    this.remuneracaoAtual.outrasDespesasAtual = parseInt(
      this.formulario.get('outrasDespesasAtual')?.value
    );
    return this.remuneracaoAtual;
  }

  private _setRemuneracaoFuturo(): void {
    this.remuneracaoFuturo.salarioFuturo =
      this.formulario.get('salarioFuturo')?.value;
    this.remuneracaoFuturo.valeRefeicaoFuturo =
      this.formulario.get('valeRefeicaoFuturo')?.value;
    this.remuneracaoFuturo.valeAlimentacaoFuturo = this.formulario.get(
      'valeAlimentacaoFuturo'
    )?.value;
  }

  private _calculaRemuneracaoAtual(remuneracao: RemuneracaoAtual): number {
    let remunecacao =
      remuneracao.salarioAtual +
      remuneracao.valeRefeicaoAtual +
      remuneracao.valeAlimentacaoAtual;
    return remunecacao;
  }

  private _calculaSalarioLiquido(
    remuneracaoAtual: RemuneracaoAtual,
    remuneracaoTotal: number,
    descontoINSS: number,
    valorDependente: number
  ): number {
    let salarioLiquido =
      remuneracaoTotal -
      descontoINSS -
      valorDependente -
      remuneracaoAtual.outrasDespesasAtual;
    return salarioLiquido;
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

  private _getAliquotaIRRF(salarioLiquido: number): number {
    let irrf: IRRF = new IRRF();
    let aliquotaIRRF: number = 0;

    if (salarioLiquido <= irrf.categoria.categoria1[0]) {
      aliquotaIRRF = irrf.aliquota.aliquota1; // 0
    }

    if (
      salarioLiquido >= irrf.categoria.categoria2[0] &&
      salarioLiquido <= irrf.categoria.categoria2[1]
    ) {
      aliquotaIRRF = irrf.aliquota.aliquota2; //7,5%
    }
    if (
      salarioLiquido >= irrf.categoria.categoria3[0] &&
      salarioLiquido <= irrf.categoria.categoria3[1]
    ) {
      aliquotaIRRF = irrf.aliquota.aliquota3; //15%
    }
    if (
      salarioLiquido >= irrf.categoria.categoria4[0] &&
      salarioLiquido <= irrf.categoria.categoria4[1]
    ) {
      aliquotaIRRF = irrf.aliquota.aliquota4; //22,5%
    }
    if (salarioLiquido > irrf.categoria.categoria5[0]) {
      aliquotaIRRF = irrf.aliquota.aliquota5; //27,5%
    }
    return aliquotaIRRF;
  }

  private _calculaBaseIR(aliquotaIRRF: number, salarioLiquido: number): number {
    return salarioLiquido * aliquotaIRRF;
  }

  private _getParcelaDedutivel(aliquotaIRRF: number): number {
    let irrf: IRRF = new IRRF();
    let parcelaDeduivel: number = 0;
    switch (aliquotaIRRF) {
      case irrf.aliquota.aliquota1:
        parcelaDeduivel = irrf.parcelaDedutivel.parcelaDeduivel1;
        break;
      case irrf.aliquota.aliquota2:
        parcelaDeduivel = irrf.parcelaDedutivel.parcelaDeduivel2;
        break;
      case irrf.aliquota.aliquota3:
        parcelaDeduivel = irrf.parcelaDedutivel.parcelaDeduivel3;
        break;
      case irrf.aliquota.aliquota4:
        parcelaDeduivel = irrf.parcelaDedutivel.parcelaDeduivel4;
        break;
      case irrf.aliquota.aliquota5:
        parcelaDeduivel = irrf.parcelaDedutivel.parcelaDeduivel5;
        break;
    }
    return parcelaDeduivel;
  }

  private _getValorDependente(remuneracao: RemuneracaoAtual): number {
    let valorDependente: number = 0;
    for (let i = 0; i < remuneracao.dependenteAtual.qntDependente; i++) {
      valorDependente += remuneracao.dependenteAtual.valorPorDependente;
    }
    return valorDependente;
  }

  private _calculaIRRF(valorBaseIR: number, parcelaDedutivel: number): number {
    return valorBaseIR - parcelaDedutivel;
  }

  private _calculaSalarioLiquidoFinal(
    remuneracao: number,
    descontoINSS: number
  ): number {
    return remuneracao - descontoINSS;
  }

  public reset(): void {
    new INSS();
    new IRRF();
    new RemuneracaoAtual();
    new RemuneracaoFuturo();
  }

  public hidenTable() {
    this.exibeTabela = false;
  }
}

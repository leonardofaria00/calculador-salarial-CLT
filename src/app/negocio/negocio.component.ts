import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {
  faBalanceScaleLeft,
  faCalculator,
  faTrashAlt,
} from '@fortawesome/free-solid-svg-icons';
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
  public iconCenter = faBalanceScaleLeft;
  public iconCalculator = faCalculator;
  public iconTrash = faTrashAlt;

  public formulario: FormGroup = new FormGroup({});
  public remuneracaoAtual: RemuneracaoAtual = new RemuneracaoAtual();
  public remuneracaoFuturo: RemuneracaoFuturo = new RemuneracaoFuturo();
  public aliquotaINSSAtual: number = 0;
  public aliquotaINSSFuturo: number = 0;
  public aliquotaIRRFAtual: number = 0;
  public aliquotaIRRFFuturo: number = 0;
  public parcelaDeduivelAtual: number = 0;
  public parcelaDeduivelFuturo: number = 0;
  public valorDependenteAtual: number = 0;
  public valorDependenteFuturo: number = 0;
  public remuneracaoTotalAtual: number = 0;
  public remuneracaoTotalFuturo: number = 0;
  public salarioLiquidoAtual: number = 0;
  public salarioLiquidoFuturo: number = 0;
  public descontoINSSAtual: number = 0;
  public descontoINSSFuturo: number = 0;
  public valorBaseIRAtual: number = 0;
  public valorBaseIRFuturo: number = 0;
  public descontoIRRFAtual: number = 0;
  public descontoIRRFFuturo: number = 0;
  public salarioLiquidoFinalAtual: number = 0;
  public salarioLiquidoFinalFuturo: number = 0;
  public exibeTabela: boolean = false;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.formBuilderGenerate();
  }

  private formBuilderGenerate() {
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
  }

  private _calculaSalarioAtual() {
    const remuneracaoAtual: RemuneracaoAtual = this._setRemuneracaoAtual();

    this.remuneracaoTotalAtual =
      this._calculaRemuneracaoAtual(remuneracaoAtual);

    this.aliquotaINSSAtual = this._getAliquotaINSS(this.remuneracaoTotalAtual);

    this.descontoINSSAtual = this._calculaINSS(
      this.remuneracaoTotalAtual,
      this.aliquotaINSSAtual
    );

    this.valorDependenteAtual = this._getValorDependenteAtual(
      this.remuneracaoAtual
    );

    this.salarioLiquidoAtual = this._calculaSalarioLiquidoAtual(
      this.remuneracaoAtual,
      this.remuneracaoTotalAtual,
      this.descontoINSSAtual,
      this.valorDependenteAtual
    );

    this.aliquotaIRRFAtual = this._getAliquotaIRRF(this.salarioLiquidoAtual);

    this.valorBaseIRAtual = this._calculaBaseIR(
      this.aliquotaIRRFAtual,
      this.salarioLiquidoAtual
    );

    this.parcelaDeduivelAtual = this._getParcelaDedutivel(
      this.aliquotaIRRFAtual
    );

    this.descontoIRRFAtual = this._calculaIRRF(
      this.valorBaseIRAtual,
      this.parcelaDeduivelAtual
    );

    this.salarioLiquidoFinalAtual = this._calculaSalarioLiquidoFinal(
      this.remuneracaoTotalAtual,
      this.descontoIRRFAtual
    );

    this.exibeTabela = true;
  }

  private _calculaSalarioFuturo() {
    const remuneracaoFuturo: RemuneracaoFuturo = this._setRemuneracaoFuturo();

    this.remuneracaoTotalFuturo =
      this._calculaRemuneracaoFuturo(remuneracaoFuturo);

    this.aliquotaINSSFuturo = this._getAliquotaINSS(
      this.remuneracaoTotalFuturo
    );

    this.descontoINSSFuturo = this._calculaINSS(
      this.remuneracaoTotalFuturo,
      this.aliquotaINSSFuturo
    );

    this.valorDependenteFuturo = this._getValorDependenteFuturo(
      this.remuneracaoFuturo
    );

    this.salarioLiquidoFuturo = this._calculaSalarioLiquidoFuturo(
      this.remuneracaoFuturo,
      this.remuneracaoTotalFuturo,
      this.descontoINSSFuturo,
      this.valorDependenteFuturo
    );

    this.aliquotaIRRFFuturo = this._getAliquotaIRRF(this.salarioLiquidoFuturo);

    this.valorBaseIRFuturo = this._calculaBaseIR(
      this.aliquotaIRRFFuturo,
      this.salarioLiquidoFuturo
    );

    this.parcelaDeduivelFuturo = this._getParcelaDedutivel(
      this.aliquotaIRRFFuturo
    );

    this.descontoIRRFFuturo = this._calculaIRRF(
      this.valorBaseIRFuturo,
      this.parcelaDeduivelFuturo
    );

    this.salarioLiquidoFinalFuturo = this._calculaSalarioLiquidoFinal(
      this.remuneracaoTotalAtual,
      this.descontoIRRFFuturo
    );
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

  private _setRemuneracaoFuturo(): RemuneracaoFuturo {
    this.remuneracaoFuturo.salarioFuturo = parseInt(
      this.formulario.get('salarioFuturo')?.value
    );
    this.remuneracaoFuturo.valeRefeicaoFuturo = parseInt(
      this.formulario.get('valeRefeicaoFuturo')?.value
    );
    this.remuneracaoFuturo.valeAlimentacaoFuturo = parseInt(
      this.formulario.get('valeAlimentacaoFuturo')?.value
    );
    this.remuneracaoFuturo.dependenteFuturo.qntDependente = parseInt(
      this.formulario.get('qntDependenteFuturo')?.value
    );
    this.remuneracaoFuturo.outrasDespesasFuturo = parseInt(
      this.formulario.get('outrasDespesasFuturo')?.value
    );
    return this.remuneracaoFuturo;
  }

  private _calculaRemuneracaoAtual(remuneracao: RemuneracaoAtual): number {
    let remunecacao: number =
      remuneracao.salarioAtual +
      remuneracao.valeRefeicaoAtual +
      remuneracao.valeAlimentacaoAtual;
    return remunecacao;
  }

  private _calculaRemuneracaoFuturo(remuneracao: RemuneracaoFuturo): number {
    let remunecacao: number =
      remuneracao.salarioFuturo +
      remuneracao.valeRefeicaoFuturo +
      remuneracao.valeAlimentacaoFuturo;
    return remunecacao;
  }

  private _calculaSalarioLiquidoAtual(
    remuneracaoAtual: RemuneracaoAtual,
    remuneracaoTotal: number,
    descontoINSS: number,
    valorDependente: number
  ): number {
    let salarioLiquido: number =
      remuneracaoTotal -
      descontoINSS -
      valorDependente -
      remuneracaoAtual.outrasDespesasAtual;
    return parseFloat(salarioLiquido.toFixed(2));
  }
  private _calculaSalarioLiquidoFuturo(
    remuneracao: RemuneracaoFuturo,
    remuneracaoTotal: number,
    descontoINSS: number,
    valorDependente: number
  ): number {
    let salarioLiquido: number =
      remuneracaoTotal -
      descontoINSS -
      valorDependente -
      remuneracao.outrasDespesasFuturo;
    return parseFloat(salarioLiquido.toFixed(2));
  }

  private _getAliquotaINSS(remuneracao: number): number {
    const inss: INSS = new INSS();
    let valorAliquota: number = 0;

    if (remuneracao <= inss.categoria.categoria1[0]) {
      valorAliquota = inss.aliquota.aliquota1; // 7,5%
    }

    if (
      remuneracao >= inss.categoria.categoria2[0] &&
      remuneracao <= inss.categoria.categoria2[1]
    ) {
      valorAliquota = inss.aliquota.aliquota2; //9%
    }

    if (
      remuneracao >= inss.categoria.categoria3[0] &&
      remuneracao <= inss.categoria.categoria3[1]
    ) {
      valorAliquota = inss.aliquota.aliquota3; //12%
    }

    if (remuneracao >= inss.categoria.categoria4[0]) {
      valorAliquota = inss.aliquota.aliquota4; //14%
    }

    return valorAliquota;
  }

  private _calculaINSS(remuneracao: number, aliquotaINSS: number): number {
    let valor: number = aliquotaINSS * remuneracao;

    return parseFloat(valor.toFixed(2));
  }

  private _getAliquotaIRRF(salarioLiquido: number): number {
    const irrf: IRRF = new IRRF();
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
    let valorBase: number = aliquotaIRRF * salarioLiquido;

    return parseFloat(valorBase.toFixed(2));
  }

  private _getParcelaDedutivel(aliquotaIRRF: number): number {
    const irrf: IRRF = new IRRF();
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

  private _getValorDependenteAtual(remuneracao: RemuneracaoAtual): number {
    let valorDependente: number = 0;
    for (let i = 0; i < remuneracao.dependenteAtual.qntDependente; i++) {
      valorDependente += remuneracao.dependenteAtual.valorPorDependente;
    }
    return valorDependente;
  }

  private _getValorDependenteFuturo(remuneracao: RemuneracaoFuturo): number {
    let valorDependente: number = 0;
    for (let i = 0; i < remuneracao.dependenteFuturo.qntDependente; i++) {
      valorDependente += remuneracao.dependenteFuturo.valorPorDependente;
    }
    return valorDependente;
  }

  private _calculaIRRF(valorBaseIR: number, parcelaDedutivel: number): number {
    let valor: number = valorBaseIR - parcelaDedutivel;

    return parseFloat(valor.toFixed(2));
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
    this.exibeTabela = false;
  }
}

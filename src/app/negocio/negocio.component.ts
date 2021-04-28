import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Remuneracao } from './model/negocio-model';

@Component({
  selector: 'app-negocio',
  templateUrl: './negocio.component.html',
  styleUrls: ['./negocio.component.css'],
})
export class NegocioComponent implements OnInit {
  public formulario: FormGroup = new FormGroup({});
  public remuneracao: Remuneracao = new Remuneracao();

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.formulario = this._formBuilder.group({
      salario: [],
      valeRefeicao: [],
      valeAlimentacao: [],
    });
  }

  public calcular(): void {
    this._setRemuneracoes();
    console.log(this.remuneracao);
  }

  private _setRemuneracoes() {
    this.remuneracao.salario = this.formulario.get('salario')?.value;
    this.remuneracao.valeRefeicao = this.formulario.get('valeRefeicao')?.value;
    this.remuneracao.valeAlimentacao = this.formulario.get(
      'valeAlimentacao'
    )?.value;
  }

  private _calculaINSS(): void {
    //TODO
  }

  private _calculaSalarioLiquido(): void {
    //TODO
  }

  private _calculaIRRF(): void {
    //TODO
  }

  private _calculaRemuneracao(): void {
    //TODO
  }
}

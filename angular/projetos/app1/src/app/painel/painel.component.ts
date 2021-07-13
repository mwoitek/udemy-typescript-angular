import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Frase } from '../shared/frase.model';
import { FRASES } from './frases-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css'],
})
export class PainelComponent implements OnInit {
  @Output() public encerrarJogo: EventEmitter<string> = new EventEmitter();
  public frases: Frase[] = FRASES;
  public instrucao = 'Traduza a frase:';
  public progresso = 0;
  public resposta = '';
  public rodada = 0;
  public rodadaFrase: Frase = new Frase('', '');
  public tentativas = 3;

  constructor() {
    this.atualizaRodada();
  }

  ngOnInit(): void {
    //
  }

  public atualizaResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value;
  }

  public atualizaRodada(): void {
    // Trocar frase da rodada
    this.rodadaFrase = this.frases[this.rodada];
    // Limpar a resposta
    this.resposta = '';
  }

  public verificarResposta(): void {
    if (this.rodadaFrase.frasePtBr === this.resposta) {
      this.rodada++;

      // Atualizar o progresso
      this.progresso += 100 / this.frases.length;

      if (this.rodada === 4) {
        this.encerrarJogo.emit('Vitória');
      }

      this.atualizaRodada();
    } else {
      // Diminuir a quantidade de tentativas
      this.tentativas--;

      // Verificar se as tentativas acabaram
      if (this.tentativas < 0) {
        this.encerrarJogo.emit('Derrota');
      }
    }
  }
}

import { FormGroup } from '@angular/forms';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Jogo } from '../model/jogo';

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  // private REST_API_SERVER = 'https://stats-fifa-tracker.herokuapp.com/';
  private REST_API_SERVER = 'http://localhost:3000/';

  constructor(private httpClient: HttpClient) {

  }

  public getJogos() {
    const stream = new Subject();
    this.httpClient.get(this.REST_API_SERVER + 'get').subscribe((resp: Jogo[]) => {
      resp.map(jogo => {
        jogo.dataFormatado = this.formataDataPartida(jogo.data);
      });
      stream.next(resp);
    });
    return stream;
  }

  public getJogosFiltrado(formGroup: FormGroup) {
    const jogador: string = formGroup.value.jogador1;
    const time: string = formGroup.value.time1;
    const stream = new Subject();
    this.httpClient.get(this.REST_API_SERVER + 'getJogadorTime?' + 'jogador1=' + jogador + '&time1=' + time).subscribe((resp: Jogo[]) => {
      resp.map(jogo => {
        jogo.dataFormatado = this.formataDataPartida(jogo.data);
      });
      stream.next(resp);
    }, (err) => {
      console.log('erro: ' + err);
    });
    return stream;
  }

  public getJogosFiltrados(formGroup: FormGroup) {
    const jogador1: string = formGroup.value.jogador1;
    const jogador2: string = formGroup.value.jogador2;
    const time1: string = formGroup.value.time1;
    const time2: string = formGroup.value.time2;
    const stream = new Subject();
    this.httpClient.get(this.REST_API_SERVER + 'getJogadoresTimes?' + 'jogador1=' + jogador1 + '&time1=' + time1
      + '&jogador2=' + jogador2 + '&time2=' + time2).subscribe((resp: Jogo[]) => {
        resp.map(jogo => {
          jogo.dataFormatado = this.formataDataPartida(jogo.data);
        });
        stream.next(resp);
      }, (err) => {
        console.log('erro: ' + err);
      });
    return stream;
  }

  public cadastroJogo(formGroup: FormGroup) {
    const stream = new Subject();
    this.httpClient.post(this.REST_API_SERVER + 'cadastroJogo', formGroup.value).subscribe((resp: Jogo[]) => {
      stream.next(resp);
    }, (err) => {
      console.log('erro: ' + err);
    }
    );
    return stream;
  }

  public formataDataPartida(data: Date) {
    return new Date(data)
      .toLocaleDateString('pt-BR', { timeZone: 'UTC', month: 'numeric', year: '2-digit', day: 'numeric' });
  }

  public getJogosCampeonato(formGroup: FormGroup) {
    const stream = new Subject();
    this.httpClient.post(this.REST_API_SERVER + 'getCampeonato', formGroup.value).subscribe((resp: Jogo[]) => {
      console.log(resp);
      stream.next(resp);
    });
    return stream;
  }

}

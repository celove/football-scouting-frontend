import { Jogo } from './../model/jogo';
import { StatsService } from './../service/stats.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray } from '@angular/forms';
import { Campeonato } from '../model/campeonato';

@Component({
  selector: 'app-tela-inicial',
  templateUrl: './tela-inicial.component.html',
  styleUrls: ['./tela-inicial.component.scss']
})
export class TelaInicialComponent implements OnInit {

  isAdd = false;
  jogo: Jogo[] = [];
  campeonatos: Campeonato[] = [
    new Campeonato('Premier League',
      ['Arsenal PL', 'Chelsea PL', 'Liverpool PL', 'Manchester City PL', 'Manchester United PL', 'Tottenham PL']),
    new Campeonato('Champions 1', ['Real Madrid', 'Barcelona', 'Liverpool', 'Manchester City', 'PSG']),
    new Campeonato('Champions 2', ['AC Milan', 'Arsenal', 'Chelsea', 'Inter de Milao', 'Napoli']),
    new Campeonato('Selecoes', ['Brasil', 'Franca', 'Inglaterra', 'Italia', 'Holanda'])
  ];
  campeonatoSelecionado = this.campeonatos[0];
  nomeColunas = ['dataFormatado', 'jogador1', 'time1', 'gols1', 'jogador2', 'time2', 'gols2'];
  jogadores = ['Kraftvk', 'Kray', 'Labotryas', 'Meltosik', 'Mooneycb', 'Taka', 'Upcake22', 'Inquisitor'];
  jogador1;
  jogador2;
  time1;
  time2;
  filtroForm: FormGroup;

  constructor(private statsService: StatsService) {
    this.getAllJogos();
  }

  private getAllJogos() {
    this.statsService.getJogos().subscribe((resp: Jogo[]) => {
      this.jogo = resp;
    });
  }

  ngOnInit() {
    this.filtroForm = new FormGroup({
      jogador1: new FormControl(),
      time1: new FormControl(),
      jogador2: new FormControl(),
      time2: new FormControl()
    });
  }

  onFilter() {
    this.isAdd ?
      this.statsService.getJogosFiltrados(this.filtroForm).subscribe((resp: Jogo[]) => {
        console.log('is add true - filtrados');
        this.jogo = resp;
      })
      :
      this.statsService.getJogosFiltrado(this.filtroForm).subscribe((resp: Jogo[]) => {
        console.log('id Add false - filtrado');
        this.jogo = resp;
      });
  }

  onReset() {
    this.getAllJogos();
  }

  onChangeAdd() {
    this.isAdd ? this.isAdd = false : this.isAdd = true;
  }

}

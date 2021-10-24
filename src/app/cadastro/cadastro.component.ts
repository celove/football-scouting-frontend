import { Campeonato } from './../model/campeonato';
import { Component, OnInit } from '@angular/core';
import { Jogo } from '../model/jogo';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { StatsService } from '../service/stats.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  jogo: Jogo = new Jogo();
  jogadores = ['Kraftvk', 'Kray', 'Labotryas', 'Meltosik', 'Mooneycb', 'Taka', 'Upcake22', 'Inquisitor'];
  jogador1;
  jogador2;
  campeonatos: Campeonato[] = [
    new Campeonato('Premier League',
      ['Arsenal PL', 'Chelsea PL', 'Liverpool PL', 'Manchester City PL', 'Manchester United PL', 'Tottenham PL']),
    new Campeonato('Champions 1', ['Real Madrid', 'Barcelona', 'Liverpool', 'Manchester City', 'PSG']),
    new Campeonato('Champions 2', ['AC Milan', 'Arsenal', 'Chelsea', 'Inter de Milao', 'Napoli']),
    new Campeonato('Selecoes', ['Brasil', 'Franca', 'Inglaterra', 'Italia', 'Holanda'])
  ];
  time1;
  time2;
  gols1;
  gols2;
  data: Date;
  campeonatoSelecionado = this.campeonatos[0];

  filtroForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private statsService: StatsService, private snackBar: MatSnackBar) {
    this.filtroForm = formBuilder.group(
      { ...this.jogo }
    );
  }

  ngOnInit(): void {
  }

  onCadastro() {
    this.statsService.cadastroJogo(this.filtroForm).subscribe((resp) => {
      this.snackBar.open('Jogo criado com sucesso.');
      this.filtroForm.setValue(new Jogo());
    });
  }

  addEvent(event: MatDatepickerInputEvent<Date>) {
    // this.data = new Date(`${event.value}`);
    // this.filtroForm.patchValue({ data: this.data});
  }

}

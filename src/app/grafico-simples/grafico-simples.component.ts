import { GraficoSimplesModel } from './graficoSimplesModel';
import { StatsService } from './../service/stats.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogCampeonatoMediaGolsComponent } from '../dialog-campeonato-media-gols/dialog-campeonato-media-gols.component';
import { FormGroup } from '@angular/forms';
import { Jogo } from '../model/jogo';

@Component({
  selector: 'app-grafico-simples',
  templateUrl: './grafico-simples.component.html',
  styleUrls: ['./grafico-simples.component.scss']
})
export class GraficoSimplesComponent {

  single: any[] = [];
  multi: any[];

  view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor(public dialog: MatDialog, private statsService: StatsService) {
  }

  onSelect(event) {
    console.log(event);
  }

  onDialog() {
    const dialogRef = this.dialog.open(DialogCampeonatoMediaGolsComponent, {
      width: '650px',
      data: {}
    });

    dialogRef.afterClosed().subscribe((form: FormGroup) => {
      const retorno = [];
      const names = [form.value.jogador1, form.value.jogador2, form.value.jogador3, form.value.jogador4, form.value.jogador5];
      const medias = [0, 0, 0, 0, 0];
      const cont = [0, 0, 0, 0, 0];
      this.statsService.getJogosCampeonato(form).subscribe((resp: Jogo[]) => {
        console.log(resp);
        resp.forEach(element => {
          names.forEach((nome, i) => {
            if (nome === element.jogador1) {
              medias[i] += +element.gols1;
            } else if (nome === element.jogador2) {
              medias[i] += +element.gols2;
            }
          });
        });
        console.log('entrou');
        console.log(medias);
        names.forEach((nome, i) => {
          retorno.push(new GraficoSimplesModel(nome, medias[i]));
        });
        this.single = [...retorno];
      });
    });
  }
}

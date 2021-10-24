import { JogadoresTimeCampeonato } from './../model/jogadoresTimeCampeonato';
import { Campeonatos } from './../model/campeonatos';
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { StatsService } from '../service/stats.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-campeonato-media-gols',
  templateUrl: './dialog-campeonato-media-gols.component.html',
  styleUrls: ['./dialog-campeonato-media-gols.component.scss']
})
export class DialogCampeonatoMediaGolsComponent implements OnInit {
  jogadoresTimeCampeonato = new JogadoresTimeCampeonato();
  campeonatos = new Campeonatos().campeonatos;
  filtroForm: FormGroup;
  times = [];
  campeonatoSelecionado = this.campeonatos[0];
  jogadores = ['Kraftvk', 'Kray', 'Labotryas', 'Meltosik', 'Mooneycb', 'Taka', 'Upcake22', 'Inquisitor'];

  constructor(public dialogRef: MatDialogRef<DialogCampeonatoMediaGolsComponent>,
    // tslint:disable-next-line:align
    private formBuilder: FormBuilder, private statsService: StatsService, @Inject
      (MAT_DIALOG_DATA) public data) {
    this.filtroForm = formBuilder.group(
      { ...this.jogadoresTimeCampeonato }
    );
  }

  ngOnInit(): void {
  }

  onFiltro() {
    this.dialogRef.close(this.filtroForm);
  }

}

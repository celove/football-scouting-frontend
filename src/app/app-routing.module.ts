import { CadastroComponent } from './cadastro/cadastro.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseComponent } from './base/base.component';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';


const routes: Routes = [
  {
    path: '', component: BaseComponent, canActivateChild: [], children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: TelaInicialComponent },
      { path: 'cadastro', component: CadastroComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { PainelPrincipalComponent } from './componentes/painel/painel-principal/painel-principal.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarMovimentosComponent } from './componentes/painel/listar-movimentos/listar-movimentos.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'criarMovimento',
    pathMatch: 'full'
  },
  {
    path: 'criarMovimento',
    component: PainelPrincipalComponent
  },
  {
    path: 'listarMovimento',
    component: ListarMovimentosComponent
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { PainelPrincipalComponent } from './componentes/painel/painel-principal/painel-principal.component';
import { FormsModule } from '@angular/forms';
import { ListarMovimentosComponent } from './componentes/painel/listar-movimentos/listar-movimentos.component';
import { HttpClientModule  } from '@angular/common/http';
import { SelecaoProdutoComponent } from './componentes/painel/selecao-produto/selecao-produto.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CabecalhoComponent,
    PainelPrincipalComponent,
    ListarMovimentosComponent,
    SelecaoProdutoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

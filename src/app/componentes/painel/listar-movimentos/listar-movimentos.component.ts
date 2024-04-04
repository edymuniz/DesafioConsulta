import { Component } from '@angular/core';
import { ConsultaMovimentoService } from '../consulta-movimento.service';
import { ConsultaMovimento } from '../consulta-movimento';

@Component({
  selector: 'app-listar-movimentos',
  templateUrl: './listar-movimentos.component.html',
  styleUrl: './listar-movimentos.component.css'
})
export class ListarMovimentosComponent {

  listaMovimentos: ConsultaMovimento[] = [];

  constructor(private service: ConsultaMovimentoService){}
  
  ngOnInit(): void {
    this.service.listar().subscribe((listaMovimentosAPI) => {
      this.listaMovimentos = listaMovimentosAPI
    })

  }



}


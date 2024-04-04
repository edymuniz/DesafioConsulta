import { Component, OnInit, ViewChild } from '@angular/core';
import { ConsultaMovimento } from '../consulta-movimento';
import { ConsultaMovimentoService } from '../consulta-movimento.service';
import { Router } from '@angular/router';
import { Produto } from '../produto';
import { ProdutoService } from '../produto.service';
import { SelecaoProdutoComponent } from '../selecao-produto/selecao-produto.component';

@Component({
  selector: 'app-painel-principal',
  templateUrl: './painel-principal.component.html',
  styleUrl: './painel-principal.component.css'
})
export class PainelPrincipalComponent implements OnInit{

  habilitarComponentes: boolean = false;
  listaProdutos: Produto[] = [];

  @ViewChild(SelecaoProdutoComponent)
  selecaoProdutoComponent!: SelecaoProdutoComponent;

  constructor(
    private serviceConsultaMovimento: ConsultaMovimentoService,
    private router: Router,
    private produtoService: ProdutoService
  ){}

  consulta: ConsultaMovimento={
    mes: '',
    ano: '',
    codigo_produto: '',
    descricao_produto: '',
    nr_lancamento: 0,
    descricao:'',
    valor: 0
  
  }
  ngOnInit(): void {  
    this.produtoService.listarProduto().subscribe((listaProdutosAPI) => {
      this.listaProdutos = listaProdutosAPI
    })  
  }

  limparMovimento(){
    alert("Limpar movimento")  
    this.consulta.mes = '';
    this.consulta.ano = '';
    this.consulta.valor = 0;
    this.consulta.descricao = '';

    this.selecaoProdutoComponent.limparSelecaoProduto();
    this.selecaoProdutoComponent.limparSelecaoCosif();  
  }

  novoMovimento(){
    alert("Novo movimento")  
  }

  incluirMovimento(){
    this.consulta.id = 9
    this.consulta.nr_lancamento = 9

    this.serviceConsultaMovimento.criar(this.consulta).subscribe(() => {
      this.router.navigate(['/criarMovimento'])
    })
  }
}

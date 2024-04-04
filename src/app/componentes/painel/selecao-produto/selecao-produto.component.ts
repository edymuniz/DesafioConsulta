import { Component, Input, OnInit } from '@angular/core';
import { Produto } from '../produto';
import { ProdutoCOSIF } from '../produto_cosif';
import { ProdutoService } from '../produto.service';
import { ProdutoCosifService } from '../produto-cosif.service';

@Component({
  selector: 'app-selecao-produto',
  templateUrl: './selecao-produto.component.html',
  styleUrl: './selecao-produto.component.css'
})
export class SelecaoProdutoComponent implements OnInit {
  @Input() habilitarComponentes: boolean = false;
  produtos: Produto[] = [];
  cosifs: ProdutoCOSIF[] = [];
  produtosFiltrados: Produto[] = [];
  selectedProduto: string = "";
  selectedCosif: string = "";
  todosOsCosifs: ProdutoCOSIF[] = [];
  
  constructor(
    private produtoService: ProdutoService, 
    private produtoCosifService: ProdutoCosifService
    ) { }

  ngOnInit(): void {
    // Carregar os produtos
    this.produtoService.listarProduto().subscribe((produtos: Produto[]) => {
      this.produtos = produtos;
      this.produtosFiltrados = produtos;
    });

    // Carregar os COSIFs
    this.produtoCosifService.listarProdutoCOSIF().subscribe((cosifs: ProdutoCOSIF[]) => {
      this.cosifs = cosifs;
      this.todosOsCosifs = cosifs;
    });
  }

  onProdutoSelect(codigoProduto: string): void {
    // Filtrar os COSIFs com base no código do produto selecionado
    this.cosifs = this.todosOsCosifs.filter(cosif => cosif.cod_produto === codigoProduto);
  }

  limparSelecaoProduto(): void {
    this.selectedProduto = "";
    setTimeout(() => {
      this.selectedProduto = "";
    });
  }
  
  limparSelecaoCosif(): void {
    this.selectedCosif = "";
    setTimeout(() => {
      this.selectedCosif = "";
    });
  }
  

}

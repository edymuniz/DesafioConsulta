import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Produto } from './produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  
  private readonly API = 'http://localhost:3001/produtos'

  constructor(private http: HttpClient) { }

  listarProduto(): Observable<Produto[]> {
    return this.http.get<any[]>(this.API).pipe(
      map(produtosApi => produtosApi.map(produtoApi => ({
        cod_produto: produtoApi.COD_PRODUTO,
        des_produto: produtoApi.DES_PRODUTO,
        sta_status: produtoApi.STA_STATUS
      })))
    );
  }
}
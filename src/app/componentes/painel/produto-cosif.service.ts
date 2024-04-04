import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProdutoCOSIF } from './produto_cosif';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoCosifService {

  private readonly API = 'http://localhost:3002/prod_cosif'

  constructor(private http: HttpClient) { }

  listarProdutoCOSIF(): Observable<ProdutoCOSIF[]> {
    return this.http.get<any[]>(this.API).pipe(
      map(cosifApi => cosifApi.map(cosifApi => ({
        cod_cosif: cosifApi.COD_COSIF,
        cod_produto: cosifApi.COD_PRODUTO,
        cod_classificacao: cosifApi.COD_CLASSIFICACAO,
        sta_status: cosifApi.STA_STATUS
      })))
    );
  }
}
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConsultaMovimento } from './consulta-movimento';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsultaMovimentoService {

  private readonly API = 'http://localhost:3000/movimentos'

  constructor(private http: HttpClient) { }

  listar(): Observable<ConsultaMovimento[]>{
    return this.http.get<ConsultaMovimento[]>(this.API)
  }

  criar(consulta: ConsultaMovimento): Observable<ConsultaMovimento>{
    return this.http.post<ConsultaMovimento>(this.API, consulta)
  }

}

import { TestBed } from '@angular/core/testing';

import { ConsultaMovimentoService } from './consulta-movimento.service';

describe('ConsultaMovimentoService', () => {
  let service: ConsultaMovimentoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsultaMovimentoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

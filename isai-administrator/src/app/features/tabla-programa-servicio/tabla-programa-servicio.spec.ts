import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaProgramaServicio } from './tabla-programa-servicio';

describe('TablaProgramaServicio', () => {
  let component: TablaProgramaServicio;
  let fixture: ComponentFixture<TablaProgramaServicio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablaProgramaServicio]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaProgramaServicio);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

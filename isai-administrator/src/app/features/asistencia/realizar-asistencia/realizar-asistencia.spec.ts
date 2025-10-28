import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealizarAsistencia } from './realizar-asistencia';

describe('RealizarAsistencia', () => {
  let component: RealizarAsistencia;
  let fixture: ComponentFixture<RealizarAsistencia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RealizarAsistencia]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RealizarAsistencia);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

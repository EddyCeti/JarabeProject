import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvedorDetallesComponent } from './provedor-detalles.component';

describe('ProvedorDetallesComponent', () => {
  let component: ProvedorDetallesComponent;
  let fixture: ComponentFixture<ProvedorDetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProvedorDetallesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvedorDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

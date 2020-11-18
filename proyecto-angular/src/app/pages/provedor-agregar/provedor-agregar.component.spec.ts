import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvedorAgregarComponent } from './provedor-agregar.component';

describe('ProvedorAgregarComponent', () => {
  let component: ProvedorAgregarComponent;
  let fixture: ComponentFixture<ProvedorAgregarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProvedorAgregarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvedorAgregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvedorEliminarComponent } from './provedor-eliminar.component';

describe('ProvedorEliminarComponent', () => {
  let component: ProvedorEliminarComponent;
  let fixture: ComponentFixture<ProvedorEliminarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProvedorEliminarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvedorEliminarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

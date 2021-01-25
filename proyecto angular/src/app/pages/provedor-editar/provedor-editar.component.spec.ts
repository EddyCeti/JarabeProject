import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvedorEditarComponent } from './provedor-editar.component';

describe('ProvedorEditarComponent', () => {
  let component: ProvedorEditarComponent;
  let fixture: ComponentFixture<ProvedorEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProvedorEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvedorEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

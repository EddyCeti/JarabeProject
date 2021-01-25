import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvidersCardComponent } from './providers-card.component';

describe('ProvidersCardComponent', () => {
  let component: ProvidersCardComponent;
  let fixture: ComponentFixture<ProvidersCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProvidersCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvidersCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

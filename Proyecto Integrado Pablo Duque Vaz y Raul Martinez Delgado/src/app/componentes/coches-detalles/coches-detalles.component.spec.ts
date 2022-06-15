import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CochesDetallesComponent } from './coches-detalles.component';

describe('CochesDetallesComponent', () => {
  let component: CochesDetallesComponent;
  let fixture: ComponentFixture<CochesDetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CochesDetallesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CochesDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarCochesComponent } from './agregar-coches.component';

describe('AgregarCochesComponent', () => {
  let component: AgregarCochesComponent;
  let fixture: ComponentFixture<AgregarCochesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarCochesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarCochesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

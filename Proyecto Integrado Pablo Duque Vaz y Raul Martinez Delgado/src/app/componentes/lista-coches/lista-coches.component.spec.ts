import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCochesComponent } from './lista-coches.component';

describe('ListaCochesComponent', () => {
  let component: ListaCochesComponent;
  let fixture: ComponentFixture<ListaCochesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaCochesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaCochesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarModificarEliminarComponent } from './agregar-modificar-eliminar.component';

describe('AgregarModificarEliminarComponent', () => {
  let component: AgregarModificarEliminarComponent;
  let fixture: ComponentFixture<AgregarModificarEliminarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarModificarEliminarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarModificarEliminarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

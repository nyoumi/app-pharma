import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AjoutVenteComponent } from './ajout-Vente.component';

describe('ReactiveFormsComponent', () => {
  let component: AjoutVenteComponent;
  let fixture: ComponentFixture<AjoutVenteComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutVenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutVenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

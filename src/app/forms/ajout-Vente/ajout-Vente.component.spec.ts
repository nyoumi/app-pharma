import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AjoutPharmacieComponent } from './ajout-Vente.component';

describe('ReactiveFormsComponent', () => {
  let component: AjoutPharmacieComponent;
  let fixture: ComponentFixture<AjoutPharmacieComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutPharmacieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutPharmacieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

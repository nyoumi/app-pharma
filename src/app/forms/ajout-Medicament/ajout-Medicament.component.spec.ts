import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AjoutMedicamentComponent } from './ajout-Medicament.component';

describe('ReactiveFormsComponent', () => {
  let component: AjoutMedicamentComponent;
  let fixture: ComponentFixture<AjoutMedicamentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutMedicamentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutMedicamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

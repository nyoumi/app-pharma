import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AjoutLotComponent } from './ajout-Lot.component';

describe('ReactiveFormsComponent', () => {
  let component: AjoutLotComponent;
  let fixture: ComponentFixture<AjoutLotComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutLotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutLotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MedicamentTableComponent } from './vente-table.component';

describe('MedicamentTableComponent', () => {
  let component: MedicamentTableComponent;
  let fixture: ComponentFixture<MedicamentTableComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicamentTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicamentTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

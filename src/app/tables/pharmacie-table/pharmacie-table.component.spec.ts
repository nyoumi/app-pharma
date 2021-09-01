import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PharmacieTableComponent } from './pharmacie-table.component';

describe('PharmacieTableComponent', () => {
  let component: PharmacieTableComponent;
  let fixture: ComponentFixture<PharmacieTableComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PharmacieTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmacieTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

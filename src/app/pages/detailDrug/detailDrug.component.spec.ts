import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { detailDrugComponent } from './detailDrug.component';

describe('detailDrugComponent', () => {
  let component: detailDrugComponent;
  let fixture: ComponentFixture<detailDrugComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ detailDrugComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(detailDrugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

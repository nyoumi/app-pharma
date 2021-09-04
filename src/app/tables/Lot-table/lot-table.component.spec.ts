import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LotTableComponent } from './lot-table.component';

describe('LotTableComponent', () => {
  let component: LotTableComponent;
  let fixture: ComponentFixture<LotTableComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LotTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LotTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

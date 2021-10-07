import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { detailUserComponent } from './detailUser.component';

describe('detailUserComponent', () => {
  let component: detailUserComponent;
  let fixture: ComponentFixture<detailUserComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ detailUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(detailUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

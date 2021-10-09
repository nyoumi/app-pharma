import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { detailVenteComponent } from './detailVente.component';

describe('detailVenteComponent', () => {
  let component: detailVenteComponent;
  let fixture: ComponentFixture<detailVenteComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ detailVenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(detailVenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

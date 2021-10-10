import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingTableComponent } from './loading.component';

describe('LoadingTableComponent', () => {
  let component: LoadingTableComponent;
  let fixture: ComponentFixture<LoadingTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadingTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

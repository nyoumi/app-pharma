import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UtilisateurTableComponent } from './utilisateur-table.component';

describe('UtilisateurTableComponent', () => {
  let component: UtilisateurTableComponent;
  let fixture: ComponentFixture<UtilisateurTableComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UtilisateurTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtilisateurTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

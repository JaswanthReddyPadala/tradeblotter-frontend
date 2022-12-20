import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecuritiesComponent } from './securities.component';

describe('SecuritiesComponent', () => {
  let component: SecuritiesComponent;
  let fixture: ComponentFixture<SecuritiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SecuritiesComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecuritiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

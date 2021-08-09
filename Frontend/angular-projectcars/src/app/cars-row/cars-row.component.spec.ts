import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsRowComponent } from './cars-row.component';

describe('CarsRowComponent', () => {
  let component: CarsRowComponent;
  let fixture: ComponentFixture<CarsRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarsRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

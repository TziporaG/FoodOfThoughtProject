import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrangeMealComponent } from './arrange-meal.component';

describe('ArrangeMealComponent', () => {
  let component: ArrangeMealComponent;
  let fixture: ComponentFixture<ArrangeMealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArrangeMealComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArrangeMealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

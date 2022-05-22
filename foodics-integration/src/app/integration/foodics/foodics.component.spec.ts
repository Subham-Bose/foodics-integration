import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodicsComponent } from './foodics.component';

describe('FoodicsComponent', () => {
  let component: FoodicsComponent;
  let fixture: ComponentFixture<FoodicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

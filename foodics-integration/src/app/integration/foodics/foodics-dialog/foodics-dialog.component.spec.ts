import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodicsDialogComponent } from './foodics-dialog.component';

describe('FoodicsDialogComponent', () => {
  let component: FoodicsDialogComponent;
  let fixture: ComponentFixture<FoodicsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodicsDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodicsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

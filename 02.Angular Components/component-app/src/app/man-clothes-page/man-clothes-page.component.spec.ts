import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManClothesPageComponent } from './man-clothes-page.component';

describe('ManClothesPageComponent', () => {
  let component: ManClothesPageComponent;
  let fixture: ComponentFixture<ManClothesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManClothesPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManClothesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

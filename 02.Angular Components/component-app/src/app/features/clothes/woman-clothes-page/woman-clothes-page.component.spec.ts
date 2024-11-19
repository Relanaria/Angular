import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomanClothesPageComponent } from './woman-clothes-page.component';

describe('WomanClothesPageComponent', () => {
  let component: WomanClothesPageComponent;
  let fixture: ComponentFixture<WomanClothesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WomanClothesPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WomanClothesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

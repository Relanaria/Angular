import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidsClothesPageComponent } from './kids-clothes-page.component';

describe('KidsClothesPageComponent', () => {
  let component: KidsClothesPageComponent;
  let fixture: ComponentFixture<KidsClothesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KidsClothesPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KidsClothesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

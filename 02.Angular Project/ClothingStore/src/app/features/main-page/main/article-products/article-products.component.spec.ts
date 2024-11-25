import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleProductsComponent } from './article-products.component';

describe('ArticleProductsComponent', () => {
  let component: ArticleProductsComponent;
  let fixture: ComponentFixture<ArticleProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticleProductsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticleProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

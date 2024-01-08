import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarRepresentationComponent } from './star-representation.component';

describe('StarRepresentationComponent', () => {
  let component: StarRepresentationComponent;
  let fixture: ComponentFixture<StarRepresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StarRepresentationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StarRepresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteRatingComponent } from './delete-rating.component';

describe('DeleteRatingComponent', () => {
  let component: DeleteRatingComponent;
  let fixture: ComponentFixture<DeleteRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeleteRatingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

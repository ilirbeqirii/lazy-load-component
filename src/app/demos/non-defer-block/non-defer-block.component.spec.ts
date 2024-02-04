import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonDeferBlockComponent } from './non-defer-block.component';

describe('NonDeferBlockComponent', () => {
  let component: NonDeferBlockComponent;
  let fixture: ComponentFixture<NonDeferBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NonDeferBlockComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NonDeferBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

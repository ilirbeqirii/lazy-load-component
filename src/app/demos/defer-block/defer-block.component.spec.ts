import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeferBlockComponent } from './defer-block.component';

describe('DeferBlockComponent', () => {
  let component: DeferBlockComponent;
  let fixture: ComponentFixture<DeferBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeferBlockComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeferBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

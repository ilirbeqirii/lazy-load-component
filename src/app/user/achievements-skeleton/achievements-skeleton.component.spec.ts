import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AchievementsSkeletonComponent } from './achievements-skeleton.component';

describe('AchievementsSkeletonComponent', () => {
  let component: AchievementsSkeletonComponent;
  let fixture: ComponentFixture<AchievementsSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AchievementsSkeletonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AchievementsSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

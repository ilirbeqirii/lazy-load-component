import { Component, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { DetailsComponent } from '../../user/details/details.component';
import { InViewportDirective } from '../in-viewport.directive';
import { BehaviorSubject } from 'rxjs';
import { AsyncPipe, NgIf, NgTemplateOutlet } from '@angular/common';
import { ProjectsSkeletonComponent } from "../../user/projects-skeleton/projects-skeleton.component";

function loadDeps() {
  return Promise.allSettled(
    [
      import("../../user/projects/projects.component"),
      import("../../user/achievements/achievements.component")
    ]
  );
}

type LoadingState = 'NOT_STARTED' | 'IN_PROGRESS' | 'COMPLETE' | 'FAILED';

@Component({
  selector: 'app-non-defer-block',
  standalone: true,
  templateUrl: './non-defer-block.component.html',
  styleUrl: './non-defer-block.component.css',
  imports: [DetailsComponent, NgIf, AsyncPipe, NgTemplateOutlet, InViewportDirective, ProjectsSkeletonComponent]
})
export class NonDeferBlockComponent {
  @ViewChild('contentSlot', { read: ViewContainerRef }) contentSlot!: ViewContainerRef;

  lazyState$ = new BehaviorSubject<LoadingState>('NOT_STARTED');

  async onViewport() {
    this.lazyState$.next('IN_PROGRESS');

    const [projectsLoadModule, achievementsLoadModule] = await loadDeps();

    if (projectsLoadModule.status == "rejected" || achievementsLoadModule.status == "rejected") {
      this.lazyState$.next('FAILED');
      return;
    }

    setTimeout(() => {
      this.contentSlot.createComponent(projectsLoadModule.value.ProjectsComponent);
      this.contentSlot.createComponent(achievementsLoadModule.value.AchievementsComponent);
  
      this.lazyState$.next('COMPLETE');
    }, 5000);
  }
}

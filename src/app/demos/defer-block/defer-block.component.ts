import { Component } from '@angular/core';
import { DetailsComponent } from '../../user/details/details.component';
import { ProjectsComponent } from '../../user/projects/projects.component';
import { AchievementsComponent } from '../../user/achievements/achievements.component';

@Component({
  selector: 'app-defer-block',
  standalone: true,
  imports: [DetailsComponent, ProjectsComponent, AchievementsComponent],
  templateUrl: './defer-block.component.html',
  styleUrl: './defer-block.component.css'
})
export class DeferBlockComponent { }

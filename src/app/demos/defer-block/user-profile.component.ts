import { Component } from '@angular/core';
import { DetailsComponent } from '../../user/details/details.component';
import { ProjectsComponent } from '../../user/projects/projects.component';
import { AchievementsComponent } from '../../user/achievements/achievements.component';
import { ProjectsSkeletonComponent } from "../../user/projects-skeleton/projects-skeleton.component";
import { AchievementsSkeletonComponent } from "../../user/achievements-skeleton/achievements-skeleton.component";
import { NavComponent } from '../../core/nav/nav.component';
import { ContactComponent } from '../../core/contact/contact.component';

@Component({
    selector: 'app-user-profile',
    standalone: true,
    templateUrl: './user-profile.component.html',
    styleUrl: './user-profile.component.css',
    imports: [DetailsComponent, NavComponent, ContactComponent, ProjectsComponent, AchievementsComponent, ProjectsSkeletonComponent, AchievementsSkeletonComponent]
})
export class UserProfileComponent { }

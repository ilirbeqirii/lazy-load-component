import { Component, OnInit } from '@angular/core';
import { achievements } from '../../data/achievements';

@Component({
  selector: 'app-achievements',
  standalone: true,
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css'],
})
export class AchievementsComponent implements OnInit {

  achievements = achievements;

  constructor() {}

  ngOnInit() {}
}

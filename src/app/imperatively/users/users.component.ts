import { Component } from '@angular/core';
import { UserDetailsComponent } from '../user-details/user-details.component';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [UserDetailsComponent, UpperCasePipe],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  me = false;
}

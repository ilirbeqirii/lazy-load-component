import { Component } from '@angular/core';
import { NavComponent } from './core/nav/nav.component';
import { RouterOutlet } from '@angular/router';
import { ContactComponent } from './core/contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavComponent, ContactComponent , RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Deferrable Views: The Past and Present';
}

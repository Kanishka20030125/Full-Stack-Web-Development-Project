import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBar } from './components/nav-bar/nav-bar'; // Import NavBar

@Component({
  selector: 'app-root',
  standalone: true, // This is the new standard
  imports: [RouterOutlet, NavBar], // <-- Add NavBarComponent to the imports array
  templateUrl: './app.component.html', // <-- Use the correct file name
  styleUrl: './app.css'
})
export class App { // <-- Your class is correctly named App
  title = 'angular-ui';
}
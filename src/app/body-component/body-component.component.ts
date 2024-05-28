import { Component } from '@angular/core';

@Component({
  selector: 'app-body-component',
  standalone: true,
  imports: [],
  templateUrl: './body-component.component.html',
  styleUrl: './body-component.component.css'
})
export class BodyComponentComponent {
  profilePhoto: string = 'assets/images/guido.png';
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-star-representation',
  templateUrl: './star-representation.component.html',
  styleUrl: './star-representation.component.scss'
})
export class StarRepresentationComponent {
  @Input() rating: number=0;
}

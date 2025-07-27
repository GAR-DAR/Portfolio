import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-background-3d',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-background-3d.component.html',
  styleUrls: ['./card-background-3d.component.css']
})
export class CardBackground3dComponent {
  @Input() theme: string = 'blue-purple';
}

import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-background-3d',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './background-3d.component.html',
  styleUrls: ['./background-3d.component.css']
})
export class Background3dComponent {
  @Input() variant: 'default' | 'dense' | 'minimal' = 'default';
  @Input() theme: string = 'blue-purple';

  getParticleArray(): number[] {
    const particleCounts = {
      minimal: 6,
      default: 8,
      dense: 12
    };
    return Array(particleCounts[this.variant]).fill(0);
  }
}

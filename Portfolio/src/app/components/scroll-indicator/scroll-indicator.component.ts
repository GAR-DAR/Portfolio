import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-scroll-indicator',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './scroll-indicator.component.html',
  styleUrl: './scroll-indicator.component.css'
})
export class ScrollIndicatorComponent {
  @Input() sections: string[] = [];
  @Input() currentSection: number = 0;
  @Output() sectionChange = new EventEmitter<number>();

  navigateToSection(index: number) {
    this.sectionChange.emit(index);
  }
}
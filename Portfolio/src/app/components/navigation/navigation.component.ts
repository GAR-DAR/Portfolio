import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {
  @Input() sections: string[] = [];
  @Input() currentSection: number = 0;
  @Output() sectionChange = new EventEmitter<number>();

  navigateToSection(index: number) {
    this.sectionChange.emit(index);
  }

  getSectionDisplayName(section: string): string {
    return section === 'about' ? 'About Me' : 'Projects';
  }
}
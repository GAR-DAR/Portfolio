import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../models/project.interface';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {
  @Input() project!: Project;
  @Input() isReversed: boolean = false;
  @Output() linkClick = new EventEmitter<string>();

  openLink(url: string) {
    this.linkClick.emit(url);
  }

  openMoreDetails() {
    // TODO: This will navigate to a detailed project page
    // For now, leaving it empty as requested
    console.log('More button clicked for project:', this.project.title);
  }

  getProjectTheme(): string {
    const title = this.project.title.toLowerCase();
    
    if (title.includes('ecommerce') || title.includes('e-commerce')) {
      return 'theme-ecommerce';
    } else if (title.includes('task') || title.includes('management')) {
      return 'theme-task';
    } else if (title.includes('weather') || title.includes('dashboard')) {
      return 'theme-weather';
    } else {
      return 'theme-default';
    }
  }
}
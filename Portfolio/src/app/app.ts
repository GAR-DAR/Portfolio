import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './components/navigation/navigation.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    NavigationComponent, 
    AboutComponent, 
    ProjectsComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  currentSection = 0;
  sections = ['about', 'projects'];

  ngOnInit() {
    // Initialize any startup logic
  }

  navigateToSection(index: number) {
    this.currentSection = index;
    this.scrollToSection(index);
  }

  scrollToSection(index: number) {
    const element = document.getElementById(this.sections[index]);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
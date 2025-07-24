import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './components/navigation/navigation.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ScrollIndicatorComponent } from './components/scroll-indicator/scroll-indicator.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    NavigationComponent, 
    AboutComponent, 
    ProjectsComponent, 
    ScrollIndicatorComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  currentSection = 0;
  sections = ['about', 'projects'];
  isScrolling = false;

  ngOnInit() {
    // Initialize any startup logic
  }

  @HostListener('wheel', ['$event'])
  onScroll(event: WheelEvent) {
    if (this.isScrolling) return;

    this.isScrolling = true;
    
    if (event.deltaY > 0 && this.currentSection < this.sections.length - 1) {
      this.currentSection++;
    } else if (event.deltaY < 0 && this.currentSection > 0) {
      this.currentSection--;
    }

    this.scrollToSection(this.currentSection);
    
    setTimeout(() => {
      this.isScrolling = false;
    }, 1000);
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
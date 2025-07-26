import { Component, OnInit, OnDestroy, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
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

export class App implements OnInit, OnDestroy {
  currentSection = 0;
  sections = ['about', 'projects'];
  private isScrolling = false;
  private observer: IntersectionObserver | null = null;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    // Only initialize scroll detection in browser environment
    if (isPlatformBrowser(this.platformId)) {
      // Wait a bit longer for DOM to be fully ready
      setTimeout(() => {
        console.log('Initializing scroll detection...');
        this.setupIntersectionObserver();
        this.updateCurrentSection();
      }, 500);
    }
  }

  ngOnDestroy() {
    // Cleanup intersection observer
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  private setupIntersectionObserver() {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    // Create intersection observer
    this.observer = new IntersectionObserver(
      (entries) => {
        if (this.isScrolling) return; // Skip during programmatic scrolling

        entries.forEach((entry) => {
          const sectionId = entry.target.id;
          const sectionIndex = this.sections.indexOf(sectionId);
          
          console.log(`Section ${sectionId} intersection:`, {
            isIntersecting: entry.isIntersecting,
            intersectionRatio: entry.intersectionRatio,
            sectionIndex: sectionIndex
          });

          // If section is intersecting and has significant visibility
          if (entry.isIntersecting && entry.intersectionRatio > 0.1) { // Reduced from 0.3 to 0.1 (10% visibility)
            if (this.currentSection !== sectionIndex) {
              console.log(`🔄 Intersection: Changing section from ${this.currentSection} to ${sectionIndex}`);
              this.currentSection = sectionIndex;
            }
          }
        });
      },
      {
        root: null, // viewport
        rootMargin: '-10% 0px -10% 0px', // Trigger when section is 10% into viewport (more sensitive)
        threshold: [0, 0.1, 0.3, 0.5, 0.7, 1.0] // Added 0.1 threshold for earlier detection
      }
    );

    // Observe each section
    this.sections.forEach(sectionId => {
      const element = document.getElementById(sectionId);
      if (element) {
        this.observer!.observe(element);
        console.log(`✓ Observing section: ${sectionId}`);
      } else {
        console.log(`❌ Section not found: ${sectionId}`);
      }
    });
  }

  @HostListener('window:scroll')
  onScroll() {
    // Use scroll-based detection as fallback when intersection observer isn't working
    if (isPlatformBrowser(this.platformId) && !this.isScrolling && !this.observer) {
      console.log('Fallback: Scroll event triggered');
      this.updateCurrentSection();
    }
  }

  private updateCurrentSection() {
    // Check if we're in browser environment
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    
    console.log('=== Scroll Detection ===');
    console.log('Scroll position:', scrollPosition);
    console.log('Window height:', windowHeight);
    
    // Default to first section if at top of page
    let newSection = 0;
    
    for (let i = this.sections.length - 1; i >= 0; i--) {
      const element = document.getElementById(this.sections[i]);
      if (element) {
        const elementTop = element.offsetTop;
        const elementHeight = element.offsetHeight;
        const threshold = elementTop - windowHeight / 3; // Changed from /2 to /3 for earlier activation
        
        console.log(`Section ${this.sections[i]} (index ${i}):`, {
          elementTop: elementTop,
          elementHeight: elementHeight,
          threshold: threshold,
          scrollPosition: scrollPosition,
          isActive: scrollPosition >= threshold,
          currentSection: this.currentSection
        });
        
        // Check if section is in view
        if (scrollPosition >= threshold) {
          newSection = i;
          console.log(`✓ Section ${this.sections[i]} is active!`);
          break;
        }
      } else {
        console.log(`❌ Element with ID '${this.sections[i]}' not found`);
      }
    }
    
    if (this.currentSection !== newSection) {
      console.log(`🔄 Changing section from ${this.currentSection} to ${newSection}`);
      this.currentSection = newSection;
    } else {
      console.log(`✓ Section remains: ${this.currentSection}`);
    }
    console.log('========================');
  }

  navigateToSection(index: number) {
    this.isScrolling = true;
    this.currentSection = index;
    
    if (isPlatformBrowser(this.platformId)) {
      this.scrollToSection(index);
    }
    
    // Reset scrolling flag after animation completes
    setTimeout(() => {
      this.isScrolling = false;
    }, 1000);
  }

  scrollToSection(index: number) {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    
    const element = document.getElementById(this.sections[index]);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
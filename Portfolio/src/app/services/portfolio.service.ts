import { Injectable } from '@angular/core';
import { Project } from '../models/project.interface';

@Injectable({
  providedIn: 'root'
})  
export class PortfolioService {

  getProjects(): Project[] {
    return [
      {
        title: 'Space Hunter',
        description: 'Players control a spaceship and fight through two action-packed levels. Each level features a fixed number of enemy pirate ships and static asteroid obstacles. To complete a level, players must destroy all enemies while avoiding the asteroids. Fast reflexes and sharp aim are the key to survival in this classic arcade-style space battle.  \nWas implemented vast amount of design patterns for learning purposes.',
        technologies: ['C#', 'Unity', 'Singleton', 'Builder', 'Decorator', 'Abstract Factory', 'Facade', 'Flyweight','Observer', 'State', 'Template'],
        image: 'assets/Projects-pics/HunterGame/image.png',
        github: 'https://github.com/GAR-DAR/space-hunter',
        demo: 'https://demo-spacehunter.com'
      },
      {
        title: 'Task Management App',
        description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
        technologies: ['React', 'Firebase', 'Material-UI', 'Socket.io'],
        image: 'assets/Projects-pics/PVI/image.png',
        github: 'https://github.com/GAR-DAR/task-manager',
        demo: 'https://demo-taskmanager.com'
      },
      {
        title: 'Weather Dashboard',
        description: 'A responsive weather dashboard with geolocation support, 7-day forecasts, and interactive charts displaying weather patterns.',
        technologies: ['Vue.js', 'Chart.js', 'OpenWeather API', 'PWA'],
        image: 'assets/Projects-pics/CourseWork/main.png',
        github: 'https://github.com/GAR-DAR/weather-dashboard',
        demo: 'https://demo-weather.com'
      }, 
      {
        title: 'Weather Dashboard',
        description: 'A responsive weather dashboard with geolocation support, 7-day forecasts, and interactive charts displaying weather patterns.',
        technologies: ['Vue.js', 'Chart.js', 'OpenWeather API', 'PWA'],
        image: 'assets/Projects-pics/CourseWork/main.png',
        github: 'https://github.com/GAR-DAR/weather-dashboard',
        demo: 'https://demo-weather.com'
      }
    ];
  }

  getPersonalInfo() {
    return {
      name: 'GARDAR',
      title: 'Full Stack Developer',
      bio: [
        "I'm a passionate full-stack developer with expertise in modern web technologies. I love creating innovative solutions and bringing ideas to life through clean, efficient code and intuitive user experiences.",
        "With a strong background in Angular, React, Node.js, and cloud technologies, I enjoy tackling complex challenges and continuously learning new technologies to stay at the forefront of web development."
      ],
      skills: {
        frontend: ['Angular', 'React', 'Vue.js', 'TypeScript', 'SCSS'],
        backend: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Firebase']
      },
      contact: {
        email: 'contact@gar-dar.dev',
        github: 'https://github.com/GAR-DAR',
        linkedin: 'https://linkedin.com/in/gar-dar'
      }
    };
  }
}
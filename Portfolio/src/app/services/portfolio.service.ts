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
        image: 'assets/Projects-pics/HunterGame/img2.png',
        github: 'https://github.com/GAR-DAR/space-hunter',
        demo: 'https://demo-spacehunter.com'
      },
      {
        title: 'KeepUP',
        description: 'Log in as a student to edit your profile, upload an avatar, add university info, and chat in real time with other students using Socket.io + Node.js (messages stored in MongoDB). Join group chats, share photos, and stay connected. Admins can access a control panel to manage, edit, or add student accounts. Student data is handled via Laravel and MySQL.',
        technologies: ['Laravel', 'PHP', "Node.js", 'Socket.io', 'MySQL', 'MongoDB', 'FTP Server'],
        image: 'assets/Projects-pics/PVI/img2.png',
        github: 'https://github.com/GAR-DAR/task-manager',
        demo: 'https://demo-taskmanager.com'
      },
      {
        title: 'Course Work',
        description: 'Second-term coursework for Software Engineering at Lviv Polytechnic National University. The project focuses on creating a list of various types of workers with sorting and filtering options. Technologies used include C# .NET, WPF, and the MVVM pattern.',
        technologies: ['C#', 'WPF','MVVM'],
        image: 'assets/Projects-pics/CourseWork/img2.png',
        github: 'https://github.com/GAR-DAR/weather-dashboard',
        demo: 'https://demo-weather.com'
      }, 
      {
        title: 'Gossip',
        description: 'Reddit-style client-server app with threaded comments, voting, and group chats. Built in C# using .NET and WPF (MVVM), with MySQL for data storage. Used Windows Sockets (TCP/IP), ZeroTier for remote access, and FTP for image transfer. Developed by a team of 8 in an Operating System lab, where I was one of the system architects.',
        technologies: ['C#', 'WPF','MVVM', 'WinSockets', 'MySQL', 'FTP Server'],
        image: 'assets/Projects-pics/Gossip/img2.png',
        github: 'https://github.com/GAR-DAR/weather-dashboard',
        demo: 'https://demo-weather.com'
      }
    ];
  }

  getPersonalInfo() {
    return {
      name: 'GARDAR',
      title: '.Net Developer',
      bio: [
        'Hi there! I am GARDAR (also Iryna Hrabovenska and a student majoring in “Software Engineering”).', 
        'I am a .Net developer with a passion for creating efficient and scalable applications. I have a strong foundation in C# and .NET technologies, and I also enjoy working on both frontend and backend development.',
        'Always eager to learn smth new and improve my skills. But for now welcome to my portfolio, where you can explore my projects and get to know me better!'
      ],
      skills: {
        primary: ['C#', '.NET', 'WPF', 'Unity', 'ASP.NET Core', 'MySQL', 'MongoDB'],
        addition: ['Angular', 'Laravel', 'PHP']
      },
      contact: {
        email: 'iryna.hrabovenska.pz.2023@lpnu.ua',
        github: 'https://github.com/GAR-DAR',
        linkedin: 'https://www.linkedin.com/in/iryna-grabovenska-8213262b7/'
      }
    };
  }
}
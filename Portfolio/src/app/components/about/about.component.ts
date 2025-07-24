import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {
  personalInfo: any;

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit() {
    this.personalInfo = this.portfolioService.getPersonalInfo();
  }

  openLink(url: string) {
    window.open(url, '_blank');
  }
}
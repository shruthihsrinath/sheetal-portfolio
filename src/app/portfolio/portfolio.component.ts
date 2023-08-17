import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Collab } from '../domain/collab.model';
import { PortfolioService } from '../service/portfolio.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  portfolioImages: Collab[] | undefined;
  collabData: any = [
    {
      collabName: 'KOSKII',
      url: '../../assets/sheetal-koskii3.jpg'
    },
    {
      collabName: 'BLISSCLUB',
      url: '../../assets/sheetal-blissclub5.jpg'
    },
  ]

  constructor(private router: Router, private portfolioService: PortfolioService) { }

  ngOnInit(): void {
    this.portfolioService.getPortfolioData().subscribe((data: Collab[]) => {
      this.portfolioImages = data.filter(collab => collab.collabName == 'ZUMBA');
    });
  }

  onClick(collabtext: string) {
    this.router.navigate(['portfolio', collabtext]);
  }
}

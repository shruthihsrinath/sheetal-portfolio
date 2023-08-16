import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {

  collabData: any = [
    {
      collabName: 'KOSKII',
      url: '../../assets/sheetal-koskii.jpg'
    },
    {
      collabName: 'BLISSCLUB',
      url: '../../assets/sheetal-blissclub5.jpg'
    },
  ]

  constructor(private router: Router) { }
  onClick(collabtext: string) {
    this.router.navigate(['portfolio', collabtext]);
  }
}

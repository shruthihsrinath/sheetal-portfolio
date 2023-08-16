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
  currentPortfolioId: string | undefined;
  currentPortfolioUrl: string | undefined;
  currentPortfolioAlt: string | undefined;
  showImage: boolean;

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

  constructor(private router: Router, private portfolioService: PortfolioService) {
    this.showImage = false;
  }

  ngOnInit(): void {
    this.portfolioService.getPortfolioData().subscribe((data: Collab[]) => {
      this.portfolioImages = data.filter(collab => collab.collabName == 'PORTFOLIO');
    });
  }

  zoomImage(image: Collab) {
    this.currentPortfolioId = image.id;
    this.currentPortfolioUrl = image.url;
    this.currentPortfolioAlt = image.altText;
    this.showImage = true;
  }

  closeZoom() {
    this.showImage = false;
  }

  nextImage(direction: string) {
    let imageNo: number | undefined;
    imageNo = Number(this.currentPortfolioId?.replace('portfolio', ''));
    if (imageNo !== undefined) {
      if (direction == 'right') {
        if (imageNo == this.portfolioImages?.length) {
          imageNo = 1;
        }
        else
          imageNo = imageNo + 1;
      }
      if (direction == 'left') {
        if (imageNo == 1) {
          imageNo = this.portfolioImages?.length;
        }
        else
          imageNo = imageNo - 1;
      }

      this.currentPortfolioId = 'portfolio' + imageNo;
      let tempImage = this.portfolioImages?.find(i => i.id == this.currentPortfolioId);
      this.currentPortfolioAlt = tempImage?.altText;
      this.currentPortfolioUrl = tempImage?.url;
    }
  }

  visitCollab(collabtext: string) {
    this.router.navigate(['portfolio', collabtext]);
  }
}

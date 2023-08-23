import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PortfolioService } from '../service/portfolio.service';
import { Collab } from '../domain/collab.model';
import { OnInit } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';

@Component({
  selector: 'app-collaboration',
  templateUrl: './collaboration.component.html',
  styleUrls: ['./collaboration.component.css']
})
export class CollaborationComponent implements OnInit {
  collabName: string | null = '';
  currentCollabId: string | undefined;
  currentCollabUrl: string | undefined;
  collabData: Collab[] | undefined;
  isMobile: boolean = false;

  constructor(private route: ActivatedRoute, private portfolioService: PortfolioService) { }

  ngOnInit(): void {
    this.collabName = this.route.snapshot.paramMap.get('collabName');
    this.portfolioService.getPortfolioData().subscribe((data: Collab[]) => {
      this.collabData = data.filter(collab => collab.collabName == this.collabName);
    });

    if (window.innerWidth <= 500) {
      this.isMobile = true;
    }
    else {
      this.isMobile = false;
    }

    fromEvent(window, 'resize').subscribe(() => {
      if (window.innerWidth <= 500) {
        this.isMobile = true;
      }
      else {
        this.isMobile = false;
      }
    });

  }
}

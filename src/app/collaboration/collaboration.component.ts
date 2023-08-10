import { Component } from '@angular/core';
import { Collab } from '../domain/collab.model';


@Component({
  selector: 'app-collaboration',
  templateUrl: './collaboration.component.html',
  styleUrls: ['./collaboration.component.css']
})
export class CollaborationComponent {
  collabName: string;
  currentCollabId: string | undefined;
  currentCollabUrl: string | undefined;

  collabImages: Collab[] = [
    {
      id: 'koskii1',
      url: '../../assets/sheetal-persona.jpg',
      altText: "In this koskii super bride collaboration, model sheetal is in dancing position wearing a gorgeous yellow lehenga. Resting her arm on two dumbbells showing her passion for fitness"
    },
    {
      id: 'koskii2',
      url: '../../assets/sheetal-koskii.jpg',
      altText: "In this koskii super bride collaboration, model sheetal is showing off a gorgeous yellow lehenga with a gentle smile"
    },
    {
      id: 'koskii3',
      url: '../../assets/sheetal-koskii2.jpg',
      altText: "In this koskii super bride collaboration, model sheetal is resting over a art pillar showing off her gorgeous yellow lenhenga"
    }
  ]

  constructor() {
    this.collabName = 'KOSKII COLLABORATION';
  }

  onClick(event: any) {
    this.currentCollabId = event.target.title;
    this.currentCollabUrl = this.collabImages.find(image => image.id == this.currentCollabId)?.url;
    console.log(this.currentCollabId)
    console.log(this.currentCollabUrl);
  }
}

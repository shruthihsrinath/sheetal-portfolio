import { Component, Input } from '@angular/core';
import { Collab } from '../domain/collab.model';
import { ActivatedRoute } from '@angular/router';

import { OnInit } from '@angular/core';

@Component({
  selector: 'app-collaboration',
  templateUrl: './collaboration.component.html',
  styleUrls: ['./collaboration.component.css']
})
export class CollaborationComponent implements OnInit {
  collabName: string | null = '';
  currentCollabId: string | undefined;
  currentCollabUrl: string | undefined;

  collabData: Collab[] = [
    {
      collabName: 'KOSKII',
      id: 'koskii1',
      url: '../../assets/sheetal-persona.jpg',
      altText: "In this koskii super bride collaboration, model sheetal is in dancing position wearing a gorgeous yellow lehenga. Resting her arm on two dumbbells showing her passion for fitness"
    },
    {
      collabName: 'KOSKII',
      id: 'koskii2',
      url: '../../assets/sheetal-koskii.jpg',
      altText: "In this koskii super bride collaboration, model sheetal is showing off a gorgeous yellow lehenga with a gentle smile"
    },
    {
      collabName: 'KOSKII',
      id: 'koskii3',
      url: '../../assets/sheetal-koskii2.jpg',
      altText: "In this koskii super bride collaboration, model sheetal is resting over a art pillar showing off her gorgeous yellow lenhenga"
    },
    {
      collabName: 'BLISSCLUB',
      id: 'blissclub1',
      url: '../../assets/sheetal-blissclub1.jpg',
      altText: "In this bliss club collaboration, model sheetal is showing off a active tie-dye leggings with dancing pose and grace"
    },
    {
      collabName: 'BLISSCLUB',
      id: 'blissclub2',
      url: '../../assets/sheetal-blissclub2.jpg',
      altText: "In this bliss club collaboration, model sheetal is showing off a active tie-dye sports wear with dancing pose and grace, looking down and stretching her hands like wings"
    },
    {
      collabName: 'BLISSCLUB',
      id: 'blissclub3',
      url: '../../assets/sheetal-blissclub3.jpg',
      altText: "In this bliss club collaboration, model sheetal is showing off a active tie-dye sports wear with dancing pose and grace, raising her hands and legs up in the air, as if she is flying"
    },
    {
      collabName: 'BLISSCLUB',
      id: 'blissclub4',
      url: '../../assets/sheetal-blissclub4.jpg',
      altText: "In this bliss club collaboration, model sheetal is showing off a active tie-dye sports wear with dancing pose and grace"
    },
    {
      collabName: 'BLISSCLUB',
      id: 'blissclub5',
      url: '../../assets/sheetal-blissclub5.jpg',
      altText: "In this bliss club collaboration, model sheetal is showing off a comfortable red top with a bright smile and sun shining on her"
    },
    {
      collabName: 'BLISS CLUB',
      id: 'blissclub6',
      url: '../../assets/sheetal-blissclub6.jpg',
      altText: "In this bliss club collaboration, model sheetal is showing off a comfortable red top with a bright smile and sun shining on her"
    },
    {
      collabName: 'BLISSCLUB',
      id: 'blissclub7',
      url: '../../assets/sheetal-blissclub7.jpg',
      altText: "In this bliss club collaboration, model sheetal is showing off a comfortable green top and fleece pant with confidence"
    }
  ]

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.collabName = this.route.snapshot.paramMap.get('collabName');
    this.collabData = this.collabData.filter(image => image.collabName == this.collabName);
  }
}

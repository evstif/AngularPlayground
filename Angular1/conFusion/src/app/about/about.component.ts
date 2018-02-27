import { Component, OnInit } from '@angular/core';
import { LeaderService } from '../services/leader.service';
import { Leader } from '../shared/leader';
import { expand, flyInOut } from '../animations/app.animation';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
    },
    animations: [
      flyInOut(),
      expand()
    ]
})
export class AboutComponent implements OnInit {

  constructor(private leaderservice: LeaderService) { }

  leaders: Leader[];
  errorMessage: string;

  ngOnInit() {
    this.leaderservice.getAll().subscribe(ls => this.leaders = ls, err => this.errorMessage = <any>err);
  }
}

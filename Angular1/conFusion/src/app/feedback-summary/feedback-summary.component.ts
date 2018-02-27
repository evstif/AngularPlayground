import { Component, OnInit, Input } from '@angular/core';
import { Feedback } from '../shared/feedback';
import { flyInOut, visibility, expand } from '../animations/app.animation';

@Component({
  selector: 'app-feedback-summary',
  templateUrl: './feedback-summary.component.html',
  styleUrls: ['./feedback-summary.component.scss'],
  animations: [expand()]
})
export class FeedbackSummaryComponent implements OnInit {

  constructor() { }

  @Input()
  feedback: Feedback;

  ngOnInit() {
  }

}

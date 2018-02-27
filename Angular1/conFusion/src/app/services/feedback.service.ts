import { Injectable } from '@angular/core';
import { Feedback } from '../shared/feedback';
import { Observable } from 'rxjs/Observable';
import { Restangular } from 'ngx-restangular';

import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class FeedbackService {

  constructor(private rectangular: Restangular) { }

  submitFeedback(feedback: Feedback): Observable<Feedback>{
    return this.rectangular.all('feedback').post(feedback);
  }

}

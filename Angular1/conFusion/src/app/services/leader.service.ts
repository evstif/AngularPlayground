import { Injectable } from '@angular/core';
import { Leaders } from '../shared/leaders';
import { Leader } from '../shared/leader';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';

@Injectable()
export class LeaderService {

  constructor() { }

  getAll(): Observable<Leader[]> {
    return Observable.of(Leaders.LEADERS);
  }

  getFeaturedOne(): Observable<Leader> {
    return Observable.of(Leaders.LEADERS.filter((l) => l.featured)[0]);
  }

}

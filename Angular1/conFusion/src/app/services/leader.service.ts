import { Injectable } from '@angular/core';
import { Leaders } from '../shared/leaders';

@Injectable()
export class LeaderService {

  constructor() { }

  getAll() {
    return Leaders.LEADERS;
  }

  getFeaturedOne() {
    return Leaders.LEADERS.filter((l) => l.featured)[0];
  }

}

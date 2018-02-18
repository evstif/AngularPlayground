import { Injectable } from '@angular/core';
import { Leaders } from '../shared/leaders';
import { Leader } from '../shared/leader';

@Injectable()
export class LeaderService {

  constructor() { }

  getAll(): Promise<Leader[]> {
    return Promise.resolve(Leaders.LEADERS);
  }

  getFeaturedOne(): Promise<Leader> {
    return Promise.resolve(Leaders.LEADERS.filter((l) => l.featured)[0]);
  }

}

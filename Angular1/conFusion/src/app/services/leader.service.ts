import { Injectable } from '@angular/core';
import { Leaders } from '../shared/leaders';
import { Leader } from '../shared/leader';
import { Observable } from 'rxjs/Observable';
import { Restangular } from 'ngx-restangular';

import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class LeaderService {

  constructor(private restangular: Restangular) { }

  getAll(): Observable<Leader[]> {
    return this.restangular.all('leaders').getList();
  }

  getFeaturedOne(): Observable<Leader> {
    return this.restangular.all('leaders').getList({featured: true}).map( ls => ls[0]);
  }

}

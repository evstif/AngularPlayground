import { Injectable } from '@angular/core';
import { Promotion } from '../shared/promotion';
import { Promotions } from '../shared/promotions';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';
import { Restangular } from 'ngx-restangular';

@Injectable()
export class PromotionService {

  constructor(private restangular: Restangular) { }

  getPromotions(): Observable<Promotion[]> {
    return this.restangular.all('promotions').getList();
  }

  getDish(id: number): Observable<Promotion> {
    return  this.restangular.one('promotions', id).get();
  }

  getFeaturedOne(): Observable<Promotion> {
    return this.restangular.all('promotions').getList({featured: true})
      .map(ps => ps[0]);
  }  
}

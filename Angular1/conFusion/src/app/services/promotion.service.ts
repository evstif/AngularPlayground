import { Injectable } from '@angular/core';
import { Promotion } from '../shared/promotion';
import { Promotions } from '../shared/promotions';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';

@Injectable()
export class PromotionService {

  constructor() { }

  getPromotions(): Observable<Promotion[]> {
    return Observable.of(Promotions.PROMOTIONS);
  }

  getPromotion(id: number): Observable<Promotion> {
    return Observable.of(Promotions.PROMOTIONS.filter((promo) => (promo.id === id))[0]);
  }

  getFeaturedPromotion(): Observable<Promotion> {
    return Observable.of(Promotions.PROMOTIONS.filter((promotion) => promotion.featured)[0]);
  }
}

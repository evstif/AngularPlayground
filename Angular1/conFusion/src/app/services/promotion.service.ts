import { Injectable } from '@angular/core';
import { Promotion } from '../shared/promotion';
import { Promotions } from '../shared/promotions';

@Injectable()
export class PromotionService {

  constructor() { }

  getPromotions(): Promise<Promotion[]> {
    return Promise.resolve(Promotions.PROMOTIONS);
  }

  getPromotion(id: number): Promise<Promotion> {
    return Promise.resolve(Promotions.PROMOTIONS.filter((promo) => (promo.id === id))[0]);
  }

  getFeaturedPromotion(): Promise<Promotion> {
    return Promise.resolve(Promotions.PROMOTIONS.filter((promotion) => promotion.featured)[0]);
  }
}

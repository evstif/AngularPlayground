import { Injectable } from '@angular/core';
import { Promotion } from '../shared/promotion';
import { Promotions } from '../shared/promotions';

@Injectable()
export class PromotionService {

  constructor() { }

  getPromotions(): Promotion[] {
    return Promotions.PROMOTIONS;
  }

  getPromotion(id: number): Promotion {
    return Promotions.PROMOTIONS.filter((promo) => (promo.id === id))[0];
  }

  getFeaturedPromotion(): Promotion {
    return Promotions.PROMOTIONS.filter((promotion) => promotion.featured)[0];
  }
}
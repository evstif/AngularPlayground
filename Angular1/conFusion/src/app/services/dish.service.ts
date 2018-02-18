import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { Dishes } from '../shared/dishes';
import { reject } from 'q';

@Injectable()
export class DishService {

  constructor() { }

  getDishes(): Promise<Dish[]> {
    return new Promise(resolve => {
      setTimeout(() => { resolve(Dishes.DISHES); }, 2000);
    });
  }

  getDish(id: number): Promise<Dish> {
    return new Promise(resolve => {
      setTimeout(() => { resolve(Dishes.DISHES.filter((dish) => (dish.id === id))[0]); }, 2000);
    });
  }

  getFeaturedDish(): Promise<Dish> {
    return new Promise(function (resolve, rejects) {
      try {
        setTimeout(() => { resolve(Dishes.DISHES.filter((dish) => dish.featured)[0]); }, 2000);
      } catch {
        rejects('Error');
      }
    });
  }
}

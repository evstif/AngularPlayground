import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { Dishes } from '../shared/dishes';
import { reject } from 'q';

@Injectable()
export class DishService {

  constructor() { }

  getDishes(): Promise<Dish[]> {
    return Promise.resolve(Dishes.DISHES);
  }

  getDish(id: number): Promise<Dish> {
    return Promise.resolve(Dishes.DISHES.filter((dish) => (dish.id === id))[0]);
  }

  getFeaturedDish(): Promise<Dish> {
    return new Promise(function (resolve, rejects) {
      try {
        resolve(Dishes.DISHES.filter((dish) => dish.featured)[0]);
      } catch {
        rejects('Error');
      }
    });
  }
}

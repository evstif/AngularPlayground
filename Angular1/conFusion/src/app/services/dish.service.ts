import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { Dishes } from '../shared/dishes';

@Injectable()
export class DishService {

  constructor() { }

  getDishes(): Dish[] {
    return Dishes.DISHES;
  }

  getDish(id: number): Dish {
    return Dishes.DISHES.filter((dish) => (dish.id === id))[0];
  }

  getFeaturedDish(): Dish {
    return Dishes.DISHES.filter((dish) => dish.featured)[0];
  }
}

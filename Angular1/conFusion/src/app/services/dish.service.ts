import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { Dishes } from '../shared/dishes';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';

import { DishdetailComponent } from '../dishdetail/dishdetail.component';

@Injectable()
export class DishService {

  constructor() { }

  getDishes(): Observable<Dish[]> {
    return Observable.of(Dishes.DISHES).delay(2000);
  }

  getDish(id: number): Observable<Dish> {
    return Observable.of(Dishes.DISHES.filter((dish) => (dish.id === id))[0]).delay(2000);
  }

  getFeaturedDish(): Observable<Dish> {
    return Observable.of(Dishes.DISHES.filter((dish) => dish.featured)[0]).delay(2000);
  }
}

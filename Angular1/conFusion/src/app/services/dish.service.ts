import { Injectable, Inject } from '@angular/core';
import { Dish } from '../shared/dish';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import { Restangular } from 'ngx-restangular';

import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { DishdetailComponent } from '../dishdetail/dishdetail.component';

@Injectable()
export class DishService {

  constructor(private restangular: Restangular) { }

    getDishes(): Observable<Dish[]> {
      return this.restangular.all('dishes').getList();
    }

    getDish(id: number): Observable<Dish> {
      return  this.restangular.one('dishes', id).get();
    }

    getFeaturedOne(): Observable<Dish> {
      return this.restangular.all('dishes').getList({featured: true})
        .map(dishes => dishes[0]);
    }

    getDishIds(): Observable<number[]> {
      return this.restangular.all('dishes').getList()
        .map(dishes => dishes.map(dish => dish.id));
    }
}

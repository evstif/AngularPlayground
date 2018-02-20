import { Injectable, Inject } from '@angular/core';
import { Dish } from '../shared/dish';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import { ProcessHttpmsgService } from './process-httpmsg.service';

import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { DishdetailComponent } from '../dishdetail/dishdetail.component';

@Injectable()
export class DishService {

  constructor(
    @Inject('BaseURL') private baseURL,
    private http: Http,
    private processHTTPMsgService: ProcessHttpmsgService) { }

    getDishes(): Observable<Dish[]> {
      return this.http.get(this.baseURL + 'dishes')
        .map(res => this.processHTTPMsgService.extractData(res))
        .catch(error => this.processHTTPMsgService.handleError(error));
    }

    getDish(id: number): Observable<Dish> {
      return  this.http.get(this.baseURL + 'dishes/' + id)
        .map(res => this.processHTTPMsgService.extractData(res))
        .catch(error => this.processHTTPMsgService.handleError(error));
    }

    getFeaturedDish(): Observable<Dish> {
      return this.http.get(this.baseURL + 'dishes?featured=true')
        .map(res => this.processHTTPMsgService.extractData(res)[0])
        .catch(error => this.processHTTPMsgService.handleError(error));
    }

    getDishIds(): Observable<number[]> {
      return this.getDishes()
        .map(dishes => dishes.map(dish => dish.id));
    }
}

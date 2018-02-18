import { Component, OnInit, Input } from '@angular/core';
import { Dish } from '../shared/dish';
import { Dishes } from '../shared/dishes';

import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DishService } from '../services/dish.service';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})

export class DishdetailComponent implements OnInit {

  constructor(
    private dishdetail: DishService,
    private route: ActivatedRoute,
    private location: Location) { }

  @Input()
  dish: Dish;

  @Input()
  dishIds: number[];

  prev: number;
  next: number;

  goBack(): void {
    this.location.back();
  }

  setPrevNext(dishId: number) {
    const index = this.dishIds.indexOf(dishId);
    this.prev = this.dishIds[(this.dishIds.length + index - 1) % this.dishIds.length];
    this.next = this.dishIds[(this.dishIds.length + index + 1) % this.dishIds.length];
  }

  ngOnInit() {
    this.dishdetail.getDishesIds().subscribe(dishIds => this.dishIds = dishIds);
    this.route.params
      .switchMap((params: Params) => this.dishdetail.getDish(+params['id']))
      .subscribe(dish => { this.dish = dish; this.setPrevNext(dish.id); });
  }
}

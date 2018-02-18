import { Component, OnInit, Input } from '@angular/core';
import { Dish } from '../shared/dish';
import { Dishes } from '../shared/dishes';

import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DishService } from '../services/dish.service';

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
  dishId: number;

  goBack(): void {
    this.location.back();
  }

  ngOnInit() {
    this.dishId = +this.route.snapshot.params['id'];
    this.dishdetail.getDish(this.dishId).subscribe(dish => this.dish = dish);
  }
}

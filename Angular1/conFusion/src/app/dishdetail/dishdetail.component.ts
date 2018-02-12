import { Component, OnInit, Input } from '@angular/core';
import { Dish } from '../shared/dish';
import { Dishes } from '../shared/dishes';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})

export class DishdetailComponent implements OnInit {

  constructor() { }

  @Input()
  dish: Dish;

  ngOnInit() {
    // this.dish = Dishes.DISHES[0];
  }
}

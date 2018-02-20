import { Component, OnInit, Inject } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(
    private dishService: DishService,
    @Inject('BaseURL')
    public baseURL: string) {  }

  dishes: Dish[];

  errorMessage: string;

  onSelect(dish: Dish) {
  }

  ngOnInit() {
    this.dishService.getDishes().subscribe(dishes => this.dishes = dishes, err => this.errorMessage = <any>err);
  }
}

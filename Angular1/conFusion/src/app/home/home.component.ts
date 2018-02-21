import { Component, OnInit, Inject } from '@angular/core';

import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { Promotion } from '../shared/promotion';
import { PromotionService } from '../services/promotion.service';
import { Leader } from '../shared/leader';
import { LeaderService } from '../services/leader.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dish: Dish;
  promotion: Promotion;
  leader: Leader;
  errorMessage: string;

  constructor(
    private dishservice: DishService,
    private promotionservice: PromotionService,
    private leaderservice: LeaderService,
    @Inject('BaseURL')
    public baseURL: string) { }

  ngOnInit() {
    this.dishservice.getFeaturedOne().subscribe(dish => this.dish = this.dish, err => this.errorMessage = <any>err);
    this.promotionservice.getFeaturedOne().subscribe(p => this.promotion = p, err => this.errorMessage = <any>err);
    this.leaderservice.getFeaturedOne().subscribe(l => this.leader = l, err => this.errorMessage = <any>err);
  }
}

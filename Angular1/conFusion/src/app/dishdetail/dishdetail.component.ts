import { Component, OnInit, Input, Output, Inject } from '@angular/core';
import { Dish } from '../shared/dish';
import { Comment } from '../shared/comment';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StarRatingModule } from 'angular-star-rating';

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
    private location: Location,
    private fb: FormBuilder,
    @Inject('BaseURL')
    public baseURL: string) {
      this.createForm();
  }

  @Input()
  dish: Dish;

  @Input()
  dishIds: number[];

  commentForm: FormGroup;
  dishcopy = null;

  @Input()
  @Output()
  public comment: Comment;

  formErrors = {
    'author': '',
    'comment': '',
  };

  validationMessages = {
    'author': {
      'required': 'Your Name is required.',
      'minlength': 'Your Name should be at least 2 symbols long.'
    },
    'comment': {
      'required': 'Comment text is required.'
    }
  };

  prev: number;
  next: number;
  errorMessage: string;

  goBack(): void {
    this.location.back();
  }

  setPrevNext(dishId: number) {
    const index = this.dishIds.indexOf(dishId);
    this.prev = this.dishIds[(this.dishIds.length + index - 1) % this.dishIds.length];
    this.next = this.dishIds[(this.dishIds.length + index + 1) % this.dishIds.length];
  }

  ngOnInit() {
    this.comment = Comment.empty();
    this.dishdetail.getDishIds().subscribe(dishIds => this.dishIds = dishIds, err => this.errorMessage = <any>err);
    this.route.params
      .switchMap((params: Params) => this.dishdetail.getDish(+params['id']))
      .subscribe(dish => { this.dish = dish; this.dishcopy = dish; this.setPrevNext(dish.id); });
  }

  createForm() {
    this.commentForm = this.fb.group({
      author: [Comment.empty().author, [Validators.required, Validators.minLength(2)]],
      comment: [Comment.empty().comment, Validators.required],
      rating: Comment.empty().rating,
      date: [Comment.empty().date]
    });

    this.commentForm.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged(); // (re)set validation messages now
  }

  onValueChanged(data?: any) {
    if (!this.commentForm) {
      return;
    }

    const form = this.commentForm;

    for (const field in this.formErrors) {
        if (this.formErrors.hasOwnProperty(field)) {
        // clear previous error message (if any)
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }

  onSubmit() {
    this.comment = Object.assign(new Comment(), this.commentForm.value);
    this.comment.syncDate();

    console.log(this.comment);

    this.dishcopy.comments.push(this.comment);
    this.dishcopy.save().subscribe(dish => { this.dish = dish; console.log(this.dish); });
    this.commentForm.reset(Comment.empty());
  }
}

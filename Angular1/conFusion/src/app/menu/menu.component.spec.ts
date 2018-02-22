import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuComponent } from './menu.component';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatInputModule, MatToolbarModule, MatListModule, MatGridListModule, MatCardModule,
  MatDialogModule, MatSlideToggleModule, MatSelectModule, MatSpinner, MatProgressSpinnerModule, MatSliderModule } from '@angular/material';

import { FlexLayoutModule } from '@angular/flex-layout';
import { Dish } from '../shared/dish';
import { Dishes } from '../shared/dishes';
import { DishdetailComponent } from '../dishdetail/dishdetail.component'

import { DishService } from '../services/dish.service';
import { Configuration } from '../shared/config';
import { Observable } from 'rxjs/Observable';

import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';


describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(async(() => {

    let dishServiceStub = {
      getDishes: function(): Observable<Dish[]> {
        return Observable.of(Dishes.DISHES);
      }
    };

    TestBed.configureTestingModule({
      imports: [ BrowserAnimationsModule,
        FlexLayoutModule,
        MatButtonModule, MatCheckboxModule, MatInputModule, MatToolbarModule, MatListModule, MatGridListModule,
          MatCardModule, MatDialogModule, MatSlideToggleModule, MatSelectModule, MatProgressSpinnerModule, MatSliderModule,
        RouterTestingModule.withRoutes([{ path: 'menu', component: MenuComponent }])
      ],
      declarations: [ MenuComponent ],
      providers: [
        { provide: DishService, useValue: dishServiceStub },
        { provide: 'BaseURL', useValue: Configuration.BASEURL },
      ]
    })
    .compileComponents();

    let dishservice = TestBed.get(DishService);

  }));

  it('dishes items should be 4', () => {
    expect(component.dishes.length).toBe(4);
    expect(component.dishes[1].name).toBe('Zucchipakoda');
    expect(component.dishes[3].featured).toBeFalsy();
  });

  it('should use dishes in the template', () => {
    fixture.detectChanges();

    let de:      DebugElement;
    let el:      HTMLElement;
    de = fixture.debugElement.query(By.css('h1'));
    el = de.nativeElement;
    
    expect(el.textContent).toContain(Dishes.DISHES[0].name.toUpperCase());

  });  

});

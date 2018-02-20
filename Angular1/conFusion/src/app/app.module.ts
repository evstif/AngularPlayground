import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule, MatInputModule, MatToolbarModule, MatListModule, MatGridListModule, MatCardModule,
  MatDialogModule, MatSlideToggleModule, MatSelectModule, MatSpinner, MatProgressSpinnerModule, MatSliderModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StarRatingModule } from 'angular-star-rating';
import { HttpModule } from '@angular/http';

import 'hammerjs';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { DishdetailComponent } from './dishdetail/dishdetail.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';

import { DishService } from './services/dish.service';
import { PromotionService } from './services/promotion.service';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { LeaderService } from './services/leader.service';
import { ValidationService } from './services/validator-service.service';
import { Configuration } from './shared/config';
import { ProcessHttpmsgService } from './services/process-httpmsg.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DishdetailComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule, MatCheckboxModule, MatInputModule, MatToolbarModule, MatListModule, MatGridListModule,
      MatCardModule, MatDialogModule, MatSlideToggleModule, MatSelectModule, MatProgressSpinnerModule, MatSliderModule,
    FlexLayoutModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StarRatingModule.forRoot(),
    HttpModule
    // ,    DatePipe
  ],
  entryComponents: [LoginComponent],
  providers:
    [DishService, PromotionService, LeaderService, ValidationService, ProcessHttpmsgService,
      { provide: 'BaseURL', useValue: Configuration.BASEURL }],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { DataComponent } from './data/data.component';
import { ViewComponent } from './view/view.component';
import { SamComponent } from './sam/sam.component';
import { MeComponent } from './me/me.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CalculatorComponent } from './calculator/calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    DataComponent,
    ViewComponent,
    SamComponent,
    MeComponent,
    CartComponent,
    LoginComponent,
    SignupComponent,
    CalculatorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

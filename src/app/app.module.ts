import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DataComponent } from './data/data.component';
import { ViewComponent } from './view/view.component';
import { SamComponent } from './sam/sam.component';
import { MeComponent } from './me/me.component';

@NgModule({
  declarations: [
    AppComponent,
    DataComponent,
    ViewComponent,
    SamComponent,
    MeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

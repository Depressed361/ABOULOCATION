import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BorderCardDirective } from './border-card.directive';
import { vehiculeMakeColorPipe } from './vehicule-make-color.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BorderCardDirective,
    vehiculeMakeColorPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

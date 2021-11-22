import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { FavoriteIconComponent } from './card/favorite-icon/favorite-icon.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    FavoriteIconComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

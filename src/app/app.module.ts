import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GenericSearchListingComponent } from './generic-search-listing/generic-search-listing.component';
import { SearchListingComponent } from './search-listing/search-listing.component';

@NgModule({
  declarations: [
    AppComponent,
    GenericSearchListingComponent,
    SearchListingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

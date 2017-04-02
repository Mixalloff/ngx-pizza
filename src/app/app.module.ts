import { AppRoutes } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';

import { AppComponent } from './app.component';
import { MainShowcaseComponent } from './main-showcase/main-showcase.component';
import { GoodsCardComponent } from './goods-card/goods-card.component';
import { FilterBlockComponent } from './filter-block/filter-block.component';
import { FilterPaginationComponent } from './filter-pagination/filter-pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    MainShowcaseComponent,
    GoodsCardComponent,
    FilterBlockComponent,
    FilterPaginationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    AppRoutes,
    FlexLayoutModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

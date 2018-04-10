import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgRedux, NgReduxModule} from "@angular-redux/store"


import { AppComponent } from './app.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { IAppState, rootReducer, INITIAL_STATE } from './store';
import { BoxComponent } from './box/box.component';


@NgModule({
  declarations: [
    AppComponent,
    BoxComponent,
  ],
  imports: [
    BrowserModule,
    DashboardModule,
    NgReduxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor (ngRedux: NgRedux<IAppState>){
    ngRedux.configureStore(rootReducer, INITIAL_STATE)
  }
}

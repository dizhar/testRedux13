import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter/counter.component';
import { PeopleComponent } from './people/people.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CounterComponent, PeopleComponent],
  exports: [CounterComponent, PeopleComponent]
})
export class DashboardModule { }

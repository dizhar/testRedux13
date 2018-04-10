import { Component, OnInit } from '@angular/core';
import {NgRedux} from "@angular-redux/store"
import { IAppState } from '../../store';
import { ADD_PEOPLE } from '../actions';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
people$: Observable<any[]>

  constructor(private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {
      this.people$ = this.ngRedux.select(state =>{
        return state.dashboard.people
      })
  }

add(input){
   this.ngRedux.dispatch({
        type: ADD_PEOPLE, name: input.value
   })
}

}

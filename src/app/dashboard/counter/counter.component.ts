import { Component, OnInit, state } from '@angular/core';
import {NgRedux} from "@angular-redux/store";
import { IDashbaordState } from '../store';
import { INCREMENT } from '../actions';
import { IAppState } from '../../store';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  counter$: Observable<number>;
  
  constructor(private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {
    this.counter$ = this.ngRedux.select(state => {
      return state.dashboard.counter;
    });
  }


  increment(){
    this.ngRedux.dispatch({  type: INCREMENT })
  }


}

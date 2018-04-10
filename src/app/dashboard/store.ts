import {tassign} from "tassign"
import { INCREMENT } from "./actions"
export interface IDashbaordState {
    counter: number
}


export const DASHBOARD_INITIAL_STATE: IDashbaordState = {
        counter: 0
}


function increment(state, action){
        return tassign(state, {
            counter: state.counter +1
        });
}


export function dashboardReducer(state: IDashbaordState = DASHBOARD_INITIAL_STATE, action): IDashbaordState {
               switch(action.type){
                   case INCREMENT: return increment(state, action) 
                   default:
                   return state
               }
           
}




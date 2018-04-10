import {tassign} from "tassign"
import { INCREMENT, ADD_PEOPLE } from "./actions"
export interface IDashbaordState {
    counter: number,
    people: any[]
}


export const DASHBOARD_INITIAL_STATE: IDashbaordState = {
        counter: 0,
        people: []
}


function increment(state, action){
        return tassign(state, {
            counter: state.counter +1
        });
}


function addPeople(state, action){
    return tassign(state, {
        people: state.people.concat([action.name])
    });
    
}

export function dashboardReducer(state: IDashbaordState = DASHBOARD_INITIAL_STATE, action): IDashbaordState {
               switch(action.type){
                   case INCREMENT: return increment(state, action)
                   case ADD_PEOPLE: return addPeople(state, action)
                   default:
                   return state
               }
           
}




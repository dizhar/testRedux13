import { IDashbaordState, DASHBOARD_INITIAL_STATE, dashboardReducer } from "./dashboard/store";
import { combineReducers } from "redux";

export interface IAppState {
    dashboard: IDashbaordState;
}

export const INITIAL_STATE: IAppState = {
        dashboard: DASHBOARD_INITIAL_STATE
}


export const rootReducer = combineReducers<IAppState>({
    dashboard: dashboardReducer,
})
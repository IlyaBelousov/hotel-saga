import {combineReducers, createStore} from "redux";
import {loginReducer} from "../../features/f1-login/f1-bll/login-reducer";

const rootReducer = combineReducers({
    login: loginReducer
})
export type AppRootStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)
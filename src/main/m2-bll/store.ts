import {applyMiddleware, combineReducers, createStore} from "redux";
import createSagaMiddleware from "redux-saga";
import {all} from 'redux-saga/effects';
import {loginReducer} from "../../features/f1-login/f1-bll/login-reducer";
import {hotelReducer} from "../../features/f2-hotels/f2-bll/hotel-reducer";
import {hotelWatcherSaga} from "../../features/f2-hotels/f2-bll/hotel-saga";
import {loadState, saveState} from "../../utils/local-storage";

const rootReducer = combineReducers({
    login: loginReducer,
    hotel: hotelReducer
})
const sagaMiddleWare = createSagaMiddleware();
export type AppRootStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleWare))
sagaMiddleWare.run(rootWatcher)

// store.subscribe(() => {
//     saveState({
//         login: store.getState().login,
//         hotel: store.getState().hotel,
//     });
// });

function* rootWatcher() {
    yield all([hotelWatcherSaga()]);
}
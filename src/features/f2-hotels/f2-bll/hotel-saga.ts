import {call, put, takeEvery} from 'redux-saga/effects';
import {hotelAPI, ResponseType} from "../../../main/m3-dal/hotel-api";
import {fetchHotels, setError, setIsLoading} from "./hotel-reducer";


export function* fetchHotelData(action: ReturnType<typeof fetchData>) {
    yield put(setIsLoading(true))
    try {
        const res: ResponseType = yield call(hotelAPI.getHotels, action.city, action.checkIn, action.checkOut)
        yield put(fetchHotels(res.data));
        yield put(setIsLoading(false))
    } catch (e) {
        yield put(setError('Some network error occurred'))
    }
}

export const fetchData = (city: string, checkIn: string|undefined, checkOut: string|undefined) => ({
    type: 'HOTELS/HOTEL_DATA/SAGA', city, checkIn, checkOut
});

export function* hotelWatcherSaga() {
    yield takeEvery('HOTELS/HOTEL_DATA/SAGA', fetchHotelData);
}
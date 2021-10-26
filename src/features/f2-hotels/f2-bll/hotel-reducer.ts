import {HotelType} from "../../../main/m3-dal/hotel-api";

export type FavouriteType = {
    hotelId: number
    hotelName: string
    stars: number
    priceAvg: number
}

const initialState = {
    hotels: [] as HotelType[],
    favourites: [] as FavouriteType[],
    checkIn: '',
    daysCount: 1,
    error: '',
    isLoading: false,

}
type InitialStateType = typeof initialState
export const hotelReducer = (state: InitialStateType = initialState, action: HotelActionsType): InitialStateType => {
    switch (action.type) {
        case "HOTELS/FETCH-HOTELS": {
            return {
                ...state,
                hotels: [...action.hotels]
            }
        }
        case "HOTELS/SET-CHECK-IN": {
            return {
                ...state,
                checkIn: action.checkIn
            }
        }
        case "HOTELS/FOLLOW-FAVOURITE": {
            debugger
            return {
                ...state,
                favourites: [action.favourite, ...state.favourites]
            }
        }
        case "HOTELS/UNFOLLOW-FAVOURITE": {
            return {
                ...state,
                favourites: [...state.favourites.filter(e => e.hotelId !== action.favourite.hotelId)]
            }
        }
        case "HOTELS/SET-ERROR": {
            return {
                ...state,
                error: action.error
            }
        }
        case "HOTELS/SET-DAYS-COUNT": {
            return {
                ...state,
                daysCount: action.count
            }
        }
        case "HOTELS/SET-IS-LOADING":{
            return {
                ...state,
                isLoading: action.isLoading
            }
        }

        default:
            return state
    }
}
export const fetchHotels = (hotels: HotelType[]) => {
    return {
        type: 'HOTELS/FETCH-HOTELS',
        hotels
    } as const
}
export const setCheckIn = (checkIn: string) => {
    return {
        type: 'HOTELS/SET-CHECK-IN',
        checkIn
    } as const
}
export const followFavourite = (favourite: FavouriteType) => {
    return {
        type: 'HOTELS/FOLLOW-FAVOURITE',
        favourite
    } as const
}
export const unFollowFavourite = (favourite: FavouriteType) => {
    return {
        type: 'HOTELS/UNFOLLOW-FAVOURITE',
        favourite
    } as const
}
export const setError = (error: string) => {
    return {
        type: 'HOTELS/SET-ERROR',
        error
    } as const
}
export const setDaysCount = (count: number) => {
    return {
        type: 'HOTELS/SET-DAYS-COUNT',
        count
    } as const
}
export const setIsLoading = (isLoading:boolean)=>{
    return {
        type: 'HOTELS/SET-IS-LOADING',
        isLoading
    }as const
}
export type HotelActionsType =
    ReturnType<typeof fetchHotels>
    | ReturnType<typeof setCheckIn>
    | ReturnType<typeof followFavourite>
    | ReturnType<typeof unFollowFavourite>
    | ReturnType<typeof setError>
    | ReturnType<typeof setDaysCount>
    | ReturnType<typeof setIsLoading>

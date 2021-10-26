import axios from "axios";

export type HotelType = {
    hotelId: number
    hotelName: string
    location: {
        name: string
        country: string
        geo: {
            lon: number
            lat: number
        },
        state: string | null
    }
    country: string
    geo: {
        lon: number
        lat: number
    }
    lat: number
    lon: number
    name: string
    state: null
    locationId: number
    priceAvg: number
    priceFrom: number
    pricePercentile: {
        3: number
        10: number
        35: number
        50: number
        75: number
        99: number
    }
    3: number
    10: number
    35: number
    50: number
    75: number
    99: number
    stars: number
}
export type ResponseType = {
    data: HotelType[]
}

export const hotelAPI = {
    getHotels(city: string, checkIn: string | undefined, checkOut: string | undefined) {
        return axios
            .get<ResponseType>(`https://engine.hotellook.com/api/v2/cache.json?location=${city}&currency=rub&checkIn=${checkIn}&checkOut=${checkOut}&limit=15`)
    }
}
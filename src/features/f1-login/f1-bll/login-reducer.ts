const initialState = {
    isLoggedIn: false,
    isLoading: false
}
type initStateType = typeof initialState
export const loginReducer = (state: initStateType = initialState, action: LoginActionsType): initStateType => {
    switch (action.type) {
        case "LOGIN/SET-LOG-IN": {
            return {
                ...state,
                isLoggedIn: action.isLoggedIn
            }
        }
        case 'LOGIN/SET-IS-LOADING':{
            return {
                ...state,
                isLoading:action.isLoading
            }
        }
        default : {
            return state
        }
    }
}
//actions
export const logIn = (isLoggedIn: boolean) => {
    return {
        type: 'LOGIN/SET-LOG-IN',
        isLoggedIn
    } as const
}
export const setLoading = (isLoading:boolean) => {
    return {
        type: 'LOGIN/SET-IS-LOADING',
        isLoading,
    } as const
}

type LoginActionsType =
    ReturnType<typeof logIn>
    |ReturnType<typeof setLoading>
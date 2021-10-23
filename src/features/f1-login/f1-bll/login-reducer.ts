const initialState = {
    isLoggedIn: false
}
type initStateType = typeof initialState
export const loginReducer = (state: initStateType = initialState, action: LoginActionsType): initStateType => {
    switch (action.type) {
        case "login/SET-LOG-IN": {
            return {
                ...state,
                isLoggedIn: action.isLoggedIn
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
        type: 'login/SET-LOG-IN',
        isLoggedIn
    }
}

type LoginActionsType = ReturnType<typeof logIn>
export type initStateType = {
    loading: boolean
}

const initState = {
    loading: false
}

export const loadingReducer = (state:initStateType = initState, action: loadingACType): initStateType => {
    switch (action.type) {
        case 'LOADING': {
            return {...state, loading: action.loading}
        }
        default: return state
    }
}

export type loadingACType = {
    type: string,
    loading: boolean
}

export const loadingAC = (loading: boolean): loadingACType  => {
    return {
        type: 'LOADING',
        loading: loading,
    }

}
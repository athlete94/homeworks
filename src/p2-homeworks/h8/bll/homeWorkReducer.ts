import {UserType} from "../HW8";

type ActionType = {
    type: 'sort' | 'check',
    payload: 'up' | 'down' | 18
}


export const homeWorkReducer = (state: Array<UserType>, action: ActionType): Array<UserType> => { // need to fix any
    switch (action.type) {
        case 'sort': {
            return action.payload === 'up' ?
                [...state.sort((a, b) => a.name <= b.name ? -1 : 1)]
                : [...state.sort((a, b) => a.name <= b.name ? 1 : -1)]
        }
        case 'check': {
            return state.filter(s => s.age > 18)
        }

        default:
            return state
    }
}


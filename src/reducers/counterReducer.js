import {
    INCREASE_COUNTER,
    DECREASE_COUNTER
} from '../actions/index'

const initialState = {
    counter: 0
}

export const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREASE_COUNTER:
            return {
                counter: state.counter + 1
            }
        case DECREASE_COUNTER:
            return {
                counter: state.counter - 1
            }
    }

    return state
}
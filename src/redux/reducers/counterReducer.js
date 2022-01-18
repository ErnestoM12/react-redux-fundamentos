//importo las acciones 
import { INCREMENT, DECREMENT } from "../actions/counterActions"
//Estado actual 
const initialState = 0
///reducer
//Es una funcion pura que reegresa el estado actual
function counter(state = initialState, action) {

    switch (action.type) {
        case INCREMENT:
            return state + 1
        case DECREMENT:
            return state - 1
        default:
            return state
    }

}

export default counter
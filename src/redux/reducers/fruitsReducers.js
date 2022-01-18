import { ADD_FRUIT } from "../actions/fruitsActions"
//Estado actual 
const initialState = [
    'Sandia',
    'Fresa'
]

function fruits(state = initialState, action) {
    switch (action.type) {
        case ADD_FRUIT:
            // return state.concat(action.payload.fruit)

            /*
            se agrego primero el action.payload para que al agregar una fruta
            la nueva fruta se encuntre en la primera poscion de la lista, si lo agrego 
            de forma invirda la fruta aparece en la ultima posicion
            */
            return [
                action.payload.fruit,
                ...state
            ]
        default:
            return state
    }
}


export default fruits
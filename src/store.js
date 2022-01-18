import { createStore } from 'redux'
//nombre de las acciones para evitar errores al escribirlas
const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'
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

//cuando el estado del store se actulize se va ejecutar esta funcón 
// store.subscribe(() => {
//     console.log(store.getState());
// })

// //creadoer de acciones
export const increment = () => {
    return {
        type: INCREMENT
    }

}
export const decrement = () => {
    return {
        type: DECREMENT
    }
}
///////////actions//////////
// store.dispatch(increment())
// store.dispatch(deincrement())
// store.dispatch({
//     type: INCREMENT
// })
// //imitando funcion async
// setTimeout(() => {
//     store.dispatch({
//         type: DECREMENT

//     })

// }, 3000)

//Store
//Almacenamiento de nuestro estado
const store = createStore(counter)

export default store








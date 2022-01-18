//nombre de las acciones para evitar errores al escribirlas
export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
////creadores de acciones
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

export const incrementAsync = (delay) => (dispatch) => {
    //simulo una funcion async
    setTimeout(() => {
        dispatch({
            type: INCREMENT
        })
    }, delay);
}

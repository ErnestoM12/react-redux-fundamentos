//nombre de las acciones para evitar errores al escribirlas
export const UPDATE_NAME = 'UPDATE_NAME'

////creadores de acciones
export const updateName = (name) => {
    return {
        type: UPDATE_NAME,
        payload: {
            name
        }
    }

}

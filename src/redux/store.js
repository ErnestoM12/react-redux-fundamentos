import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'

//Middlewares

const logger = (store) => (next) => (action) => {
    next(action)
    console.log('ah ocurrido una nueva accion', action)
    /*tambien se podria madar otra accion con dispatch*/
    //store.dispatch()
    //validar cualquier otra cosa
}
const confirmDeleteTodo = (store) => (next) => (action) => {

    if (action.type === 'DELETE_TODO') {
        //metodo de navegador anteponer la palabra window
        const conf = window.confirm('seguro que quieres elimar')
        if (conf) {
            next(action)
        }
    } else {
        next(action)
    }

}




//Store
//Almacenamiento de nuestro estado
const store = createStore(rootReducer,
    applyMiddleware(confirmDeleteTodo, logger))

export default store








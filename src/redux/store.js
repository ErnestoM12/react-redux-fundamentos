import { createStore, applyMiddleware } from 'redux'
//import logger from 'redux-logger'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

//Middlewares

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

/////Store/////
//Almacenamiento de nuestro estado
const store = createStore(rootReducer,
    applyMiddleware(
        confirmDeleteTodo,
        /*logger,*/
        thunk))
export default store








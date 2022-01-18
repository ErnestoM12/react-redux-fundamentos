import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

//Middlewares

// const confirmDeleteTodo = (store) => (next) => (action) => {

//     if (action.type === 'DELETE_TODO') {
//         //metodo de navegador anteponer la palabra window
//         const conf = window.confirm('seguro que quieres elimar')
//         if (conf) {
//             next(action)
//         }
//     } else {
//         next(action)
//     }

// }

//crear variable para la extencion devtools chroms
const composeEnhancers = (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true, traceLimit: 25 })) || (compose);



/////Store/////
//Almacenamiento de nuestro estado
const store = createStore(
    //reducers
    rootReducer,
    //devtools extencions
    composeEnhancers(
        //middlewares
        applyMiddleware(
            // confirmDeleteTodo,
            thunk)
    )
)
export default store








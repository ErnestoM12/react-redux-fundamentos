import { combineReducers } from 'redux'
import counter from './counterReducer'
import user from './userReducer'
import fruits from './fruitsReducers'


export default combineReducers({
    counter,
    user,
    fruits
})


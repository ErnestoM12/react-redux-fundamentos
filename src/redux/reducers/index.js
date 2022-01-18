import { combineReducers } from 'redux'
import counter from './counterReducer'
import user from './userReducer'
import fruits from './fruitsReducers'
import todo from './todoReducer'
import posts from './postsReducer'


export default combineReducers({
    counter,
    user,
    fruits,
    todo,
    posts
})


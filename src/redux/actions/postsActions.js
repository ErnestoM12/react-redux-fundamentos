import axios from "axios"

export const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST'
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS'
export const FETCH_POSTS_ERROR = 'FETCH_POSTS_ERROR'

export const fetchPosts = () => async (dispatch) => {

  dispatch({ type: FETCH_POSTS_REQUEST })

  try {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts')

    dispatch({
      type: FETCH_POSTS_SUCCESS,
      payload: {
        posts: res.data
      }
    })
  } catch (error) {
    dispatch({
      type: FETCH_POSTS_ERROR,
      error: error.toString()
    })

  }



}
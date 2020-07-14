import * as types from './actionTypes'
import http from '../../axios'

export const getPostsStarted = { type: types.GET_POSTS_STARTED }
export const deletPost = (payload) => { return { type: types.DELETE_POST, payload } }

export const getPosts = (page, filter = 'all') => {
  return async (dispatch) => {
    dispatch(getPostsStarted)
    if (!filter) {
      filter = 'all'
    }
    const posts = await http.get(`/getPosts/${page}/${filter}`)
    dispatch({ type: types.POSTS_FETCHED, payload: posts.data.data })
  }
}

export const login = (email, password) => {
  return async (dispatch) => {
    const user = await http.post('/login', { email, password })
    dispatch({type: types.FETCHED_USER, payload: user.data.user})
    //document.cookie = `token=${user.data.token}; max-age=2592000`
  }
}



// async action types goes here!!
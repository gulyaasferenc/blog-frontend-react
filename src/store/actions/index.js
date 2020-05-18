import * as types from './actionTypes'
import http from '../../axios'

export const getPostsStarted = { type: types.GET_POSTS_STARTED }
export const deletPost = (payload) => { return { type: types.DELETE_POST, payload: payload } }

export const getPosts = () => {
  return async (dispatch) => {
    dispatch(getPostsStarted)
    const posts = await http.get('getPosts/1')
    dispatch({ type: types.POSTS_FETCHED, payload: posts })
  }
}



// async action types goes here!!
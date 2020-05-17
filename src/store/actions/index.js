import * as types from './actionTypes'

export const getPosts = () => { return { type: types.GET_POSTS } }
export const deletPost = (payload) => { return { type: types.DELETE_POST, payload: payload } }

// async action types goes here!!
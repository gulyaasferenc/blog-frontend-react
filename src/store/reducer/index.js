const myState = {
  posts: [],
  isLoading: false,
  user: null
}

// all state of fetching data have to be covered!!
export default (state = myState, action) => {
  switch (action.type) {
    case 'GET_POSTS_STARTED':
      return {
        ...state,
        isLoading: true
      }
      case 'POSTS_FETCHED':
        return {
          ...state,
          isLoading: false,
          posts: action.payload
        }
      case 'FETCHED_USER':
        return {
          ...state,
          user: action.payload
        }
    default:
      return state
  }
}


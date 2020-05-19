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
        ...myState,
        isLoading: true
      }
      case 'POSTS_FETCHED':
        return {
          ...myState,
          isLoading: false,
          posts: action.payload
        }
      case 'FETCHED_USER':
        return {
          ...myState,
          user: action.payload
        }
    default:
      return state
  }
}


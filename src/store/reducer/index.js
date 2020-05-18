const myState = {
  posts: [],
  isLoading: false
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

    default:
      return state
  }
}


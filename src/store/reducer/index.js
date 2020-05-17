const myState = {
  posts: []
}

// all state of fetching data have to be covered!!
export default (state = myState, action) => {
  switch (action.type) {
    case 'GET_POSTS':
      return {

      }

    default:
      return state
  }
}


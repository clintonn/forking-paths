export default (state={}, action) => {
  switch (action.type) {
    case 'FETCH_LINK_DATA':
      return action.payload
    default:
      return state
  }
}

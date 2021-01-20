const toggleFirst = (state = true, action) => {
  switch(action.type) {
    case 'SELECT1':
      return !state;
    default:
      return state;
  }
}

export default toggleFirst;
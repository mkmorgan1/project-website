const toggleSecond = (state = false, action) => {
  switch(action.type) {
    case 'SELECT2':
      return !state;
    default:
      return state;
  }
}

export default toggleSecond;
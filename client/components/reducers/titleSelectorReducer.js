export const toggleFirst = (state = false, action) => {
  switch(action.type) {
    case 'SELECT1':
      return !state;
    default:
      return state;
  }
}
export const toggleSecond = (state = false, action) => {
  switch(action.type) {
    case 'SELECT2':
      return !state;
    default:
      return state;
  }
}
export const toggleThird = (state = false, action) => {
  switch(action.type) {
    case 'SELECT3':
      return !state;
    default:
      return state;
  }
}
export const toggleFourth = (state = false, action) => {
  switch(action.type) {
    case 'SELECT4':
      return !state;
    default:
      return state;
  }
}

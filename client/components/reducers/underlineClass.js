const underlinePosition = (state = 'underline1', action) => {
  switch(action.type) {
    case 'UNDERLINE_1':
      return state = 'underline1';
    case 'UNDERLINE_2':
      return state = 'underline2';
    case 'UNDERLINE_3':
      return state = 'underline3';
    case 'UNDERLINE_4':
      return state = 'underline4';
    default:
      return state;
  }
}
export default underlinePosition
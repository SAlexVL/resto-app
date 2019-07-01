const initialState = {
  menu: [],
  error: false,
  loading: true
}

const reducer = (state = initialState, action) => {
  console.log(state);
  switch (action.type) {
    case 'MENU_LOADED':
      return {
        menu: action.payload,
        error: false,
        loadign: false
      };
    case 'MENU_REQUESTED':
      return {
        menu: state.menu,
        error: false,
        loadign: true
      };  
    case 'MENU_ERROR':
      return {
          menu: state.menu,
          error: true,
          loading: false
      };       
      default:
        return state;
  }
}

export default reducer;
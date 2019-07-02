const initialState = {
  menu: [],
  error: false,
  loading: true,
  items: [],
  total: 0
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'MENU_LOADED':
      return {
        ...state,
        menu: action.payload,
        error: false,
        loading: false
      };
    case 'MENU_REQUESTED':
      return {
        ...state,
        menu: state.menu,
        error: false,
        loadign: true
      };  
    case 'MENU_ERROR':
      return {
        ...state,
        menu: state.menu,
        error: true,
        loading: false
      };
    case 'ITEM_ADD_TO_CART':
      const id = action.payload;
      const item = state.menu.find(item => item.id === id);
      const secondItem = state.items.find(item => item.id === id);
      const secondItemIndex = state.items.findIndex(item => item.id === id);
      const sum = state.total + item.price;      
      const newItem = {
        title: item.title,
        price: item.price,
        url: item.url,
        id: item.id,
        amount: 1
      };
      if (secondItem) {
        ++secondItem.amount;
        return {
            ...state,
            items: [
                ...state.items.slice(0, secondItemIndex),
                secondItem,
                ...state.items.slice(secondItemIndex + 1)
            ],
            total: sum
        }
      }      
      return {
        ...state,
        items: [
          ...state.items,
          newItem
        ],
        total: sum
      };
    case 'ITEM_DELETE_FROM_CART':
      const idx = action.payload;
      const itemIndex = state.items.findIndex(item => item.id === idx); 
      const newSum = state.total - state.items[itemIndex].amount*state.items[itemIndex].price;
      return {
        ...state,
        items: [
          ...state.items.slice(0, itemIndex),
          ...state.items.slice(itemIndex + 1)
        ],
        total: newSum
      }        
      default:
        return state;
  }
}

export default reducer;
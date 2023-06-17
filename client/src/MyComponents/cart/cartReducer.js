// cartReducer.js

const initialState = [];

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [...state, action.payload];
    case 'REMOVE_FROM_CART':
      const itemId = action.payload;
      const updatedCart = state.filter(item => item.id !== itemId);

      // Update the localStorage
      localStorage.setItem('reduxState', JSON.stringify({
        ...state,
        cart: updatedCart,
      }));

      return updatedCart;
    default:
      return state;
  }
};

export default cartReducer;

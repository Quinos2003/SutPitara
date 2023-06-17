// wishlistReducer.js
const initialState = [];

export const addToWishlist = (product) => {
  return {
    type: 'ADD_TO_WISHLIST',
    payload: product,
  };
};

export const removeFromWishlist = (productId) => {
  return {
    type: 'REMOVE_FROM_WISHLIST',
    payload: productId,
  };
};

const wishlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_WISHLIST':
      return [...state, action.payload];
    case 'REMOVE_FROM_WISHLIST':
      return state.filter(item => item.id !== action.payload);
    default:
      return state;
  }
};

export default wishlistReducer;

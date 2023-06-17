import { configureStore, combineReducers } from '@reduxjs/toolkit';
import cartReducer from './cartReducer';
import wishlistReducer from '../wishlist/wishlistReducer';

const rootReducer = combineReducers({
  cart: cartReducer,
  wishlist: wishlistReducer // Include the wishlist reducer in the root reducer

});

const persistedState = localStorage.getItem('reduxState')
  ? JSON.parse(localStorage.getItem('reduxState'))
  : {};

const store = configureStore({
  reducer: rootReducer,
  preloadedState: persistedState,
});


store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()));
});

export default store;

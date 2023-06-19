import { configureStore, combineReducers } from '@reduxjs/toolkit';
import cartReducer from './cartReducer';
import wishlistReducer from '../wishlist/wishlistReducer';

const rootReducer = combineReducers({
  cart: cartReducer,
  wishlist: wishlistReducer,
});

const persistedState = localStorage.getItem('reduxState')
  ? JSON.parse(localStorage.getItem('reduxState'))
  : {};

// Ensure both cart and wishlist properties are present in the stored state
const initialState = {
  cart: [],
  wishlist: [],
};

const store = configureStore({
  reducer: rootReducer,
  preloadedState: { ...initialState, ...persistedState }, // Merge initial state with stored state
});

store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()));
});

export default store;

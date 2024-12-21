import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../reducers/productReducers';

const store = configureStore({
  reducer: {
    products: productReducer,
  },
});

export default store;

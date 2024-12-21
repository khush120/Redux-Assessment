import axios from 'axios';

// Action types
export const FETCH_PRODUCTS_START = 'FETCH_PRODUCTS_START';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_ERROR = 'FETCH_PRODUCTS_ERROR';

// Action creator for fetching products
export const fetchProducts = () => async (dispatch) => {
  dispatch({ type: FETCH_PRODUCTS_START });

  try {
    const response = await axios.get('http://localhost:5000/products');
    dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: FETCH_PRODUCTS_ERROR, payload: error.message });
  }
};

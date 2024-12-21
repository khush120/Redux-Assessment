const initialState = {
    items: [],
    loading: false,
  };
  

  const productReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_PRODUCTS_START':
        return { ...state, loading: true };
      case 'FETCH_PRODUCTS_SUCCESS':
        return { ...state, loading: false, items: action.payload };
      case 'FETCH_PRODUCTS_FAILURE':
        return { ...state, loading: false };
      default:
        return state;
    }
  };
  
  export default productReducer;
  
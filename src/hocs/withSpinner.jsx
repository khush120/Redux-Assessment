import React from 'react';
import Spinner from '../components/Spinner';

const withSpinner = (WrappedComponent) => {
  return ({ isLoading, ...props }) => {
    if (isLoading) {
      return <Spinner />;
    }
    return <WrappedComponent {...props} />;
  };
};

export default withSpinner;

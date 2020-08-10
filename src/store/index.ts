import React from 'react';

import auth from './auth';

const store = {
  auth,
};

export const StoreContext = React.createContext(store);

export default store;

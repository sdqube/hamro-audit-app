import React from 'react';

import auth from './auth';
import user from './user';

const store = {
  auth,
  user,
};

export const StoreContext = React.createContext(store);

export default store;

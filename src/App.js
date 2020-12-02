import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import configureStore from './store/configureStore';

import './App.css';

const App = () => {
  const { store, persistor } = configureStore();
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        This is my app!!!
      </PersistGate>
    </Provider>
  )
};

export default App;

import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import configureStore from './store/configureStore';

import SearchBar from './components/SearchBar';
import Details from './components/Details';

import 'rsuite/dist/styles/rsuite-default.css';

const App = () => {
  const { store, persistor } = configureStore();
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <SearchBar />
        <Details />
      </PersistGate>
    </Provider>
  )
};

export default App;

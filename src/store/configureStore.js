/* eslint-disable no-underscore-dangle */
import { applyMiddleware, createStore, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import favoritesReducer from '../reducers/favorites';

const rootReducer = combineReducers({
  favorites: favoritesReducer,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const reduxDevTools = (() => {
  if (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__) {
    return window.__REDUX_DEVTOOLS_EXTENSION__();
  }
  return undefined;
})();

const store = () => {
  const middlewares = [thunk];
  const configureStore = applyMiddleware(...middlewares)(createStore);
  const store = configureStore(persistedReducer, reduxDevTools);
  const persistor = persistStore(store);
  return { store, persistor };
};

export default store;

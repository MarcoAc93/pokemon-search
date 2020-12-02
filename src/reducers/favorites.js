import { ADD_FAVORITE, REMOVE_FAVORITE } from '../constants/favorites';

const initialState = {
  favorites: [],
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.push(action.payload)
      }
    case REMOVE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter(fav => fav === action.payload)
      };
    default:
      return state;
  }
};

export default loginReducer;

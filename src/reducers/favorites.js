import {
  ADD_FAVORITE, REMOVE_FAVORITE,
  SEARCH_POKEMON_ERROR, SEARCH_POKEMON,
} from '../constants/favorites';

const initialState = {
  favorites: [],
  pokemon: { },
  error: {
    show: false,
    message: ''
  }
};

const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.push(action.payload)
      };
    case REMOVE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter(fav => fav === action.payload)
      };
    case SEARCH_POKEMON:
      return {
        ...state,
        pokemon: action.payload,
      };
    case SEARCH_POKEMON_ERROR:
      return {
        ...state,
        error: {
          show: true,
          message: action.payload,
        }
      };
    default:
      return state;
  }
};

export default favoritesReducer;

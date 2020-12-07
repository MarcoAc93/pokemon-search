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
        error: {
          show: false,
          message: ''
        },
        favorites: state.favorites.find(fav => fav.name === action.payload.name) ? [...state.favorites] : [...state.favorites, action.payload],
      };
    case REMOVE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.favorites.filter(fav => fav === action.payload)
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

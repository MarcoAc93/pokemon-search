import {
  SEARCH_POKEMON, SEARCH_POKEMON_ERROR,
  ADD_FAVORITE,
} from '../constants/favorites';
import { searchPokemonRequest } from '../services/index';

const searchAction = payload => ({ type: SEARCH_POKEMON, payload });

const searchActionError = payload => ({ type: SEARCH_POKEMON_ERROR, payload });

const addFavoriteAction = payload => ({ type: ADD_FAVORITE, payload })

export const searchPokemon = (name, callback) => (
  async dispatch => {
    const pokemon = await searchPokemonRequest(name);
    if (pokemon.data) {
      dispatch(searchAction(pokemon.data));
    } else {
      if (callback) callback(pokemon.message)
      dispatch(searchActionError(pokemon.message));
    }
  }
);

export const addToFavorite = pokemon => dispatch => dispatch(addFavoriteAction(pokemon))

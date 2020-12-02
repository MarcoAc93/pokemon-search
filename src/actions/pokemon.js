import { SEARCH_POKEMON, SEARCH_POKEMON_ERROR } from '../constants/favorites';
import { searchPokemonRequest } from '../services/index';

const searchAction = payload => ({ type: SEARCH_POKEMON, payload });

const searchActionError = payload => ({ type: SEARCH_POKEMON_ERROR, payload });

export const searchPokemon = (name) => (
  async (dispatch) => {
    const pokemon = await searchPokemonRequest(name);
    if (pokemon.data) {
      dispatch(searchAction(pokemon.data));
    } else {
      dispatch(searchActionError(pokemon.message));
    }
  }
);

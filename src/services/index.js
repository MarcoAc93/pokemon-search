import axios from 'axios';
import { pokemonApi } from '../constants/api';

export const searchPokemonRequest = async (name) => {
  try {
    const response = await axios.get(`${pokemonApi}/pokemon/${name}`);
    const { data } = response;
    return { data, message: 'Pokemon found!' };
  } catch (error) {
    console.log('ERROR: Search pokemon request');
    const { response: { data } } = error;
    return { data: null, message: data };
  }
};
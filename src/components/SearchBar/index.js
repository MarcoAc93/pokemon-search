import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as SearchActions from '../../actions/pokemon';

const SearchBar = ({ searchPokemon }) => {
  const [search, setSearch] = useState('');
  const handleSearchChange = ({ target: { value } }) => setSearch(value);

  const handleSearch = () => {
    searchPokemon(search);
  }

  return (
    <div>
      <input value={search} onChange={handleSearchChange} />
      <button onClick={handleSearch}>Search Pokemon</button>
    </div>
  )
};

const mapDispatchToProps = dispatch => bindActionCreators(SearchActions, dispatch);

const mapStateToProps = state => ({ favorites: state.favorites.favorites });

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);

import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { InputGroup, Input, Button, Grid, Row, Col } from 'rsuite';
import * as SearchActions from '../../actions/pokemon';

import './styles.css';

const SearchBar = ({ searchPokemon }) => {
  const [search, setSearch] = useState('');
  const handleSearchChange = (value) => setSearch(value);

  const handleSearch = () => {
    searchPokemon(search);
  }

  return (
    <Grid>
      <Row className="search-bar__centered">
        <Col xs={12}>
          <InputGroup>
            <InputGroup.Addon>Search Pokemon!</InputGroup.Addon>
            <Input value={search} onChange={handleSearchChange} />
          </InputGroup>
          <Button onClick={handleSearch} appearance="primary" className="search-bar__button">
            Search!
          </Button>
        </Col>
      </Row>
    </Grid>
  )
};

const mapDispatchToProps = dispatch => bindActionCreators(SearchActions, dispatch);

const mapStateToProps = state => ({ favorites: state.favorites.favorites });

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);

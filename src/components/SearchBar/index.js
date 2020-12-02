import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { InputGroup, Input, Button, Grid, Row, Col, Notification } from 'rsuite';
import * as SearchActions from '../../actions/pokemon';

import './styles.css';

const SearchBar = ({ searchPokemon, error }) => {
  const [search, setSearch] = useState('');
  const handleSearchChange = (value) => setSearch(value);

  const handleSearch = () => {
    searchPokemon(search, message => { Notification['error']({ title: message }) });
  }

  return (
    <Grid>
      <Row className="search-bar__centered">
        <Col xs={12}>
          <InputGroup>
            <InputGroup.Addon>Pokemon Name</InputGroup.Addon>
            <Input value={search} onChange={handleSearchChange} />
          </InputGroup>
          <Button onClick={handleSearch} appearance="primary" className="search-bar__button" style={{ width: '100%', marginTop: 15 }}>
            Search
          </Button>
        </Col>
      </Row>
    </Grid>
  )
};

const mapDispatchToProps = dispatch => bindActionCreators(SearchActions, dispatch);

const mapStateToProps = state => ({ error: state.favorites.error });

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);

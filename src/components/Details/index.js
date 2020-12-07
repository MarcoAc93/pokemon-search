import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Panel, Grid, Row, Col, Tag, Icon } from 'rsuite';
import * as FavoritesActions from '../../actions/pokemon';

import './styles.css'

const Details = ({ pokemon, addToFavorite, favorites }) => {

  const [fav, setFav] = useState(false);  
  useEffect(() => {
    const isFavorite = favorites.find(fav => fav.name === pokemon.name);
    if (isFavorite) setFav(true);
    else setFav(false);
  }, [favorites, pokemon]);
  
  if (!pokemon.name || pokemon.name === '') return null;

  return (
    <Grid>
      <Row className="details__centered">
        <Col xs={12}>
          <Panel header="Details" bordered className="details__centered-panel">
            <div onClick={() => addToFavorite(pokemon)}>
              <Icon icon="star" size="2x" style={{ color: fav ? 'gold' : 'gray' }} />
            </div>
            <div>
              <img src={pokemon.sprites.front_default} alt={pokemon.name} />
              <h4>Name</h4>
              <Tag>{pokemon.name}</Tag>

              <h4>Abilities</h4>
              {pokemon.abilities.map((ability, index) => (
                <div key={index}>
                  <Tag>{ability.ability.name}</Tag>
                </div>
              ))}

              <h4>Height</h4>
              <Tag>{pokemon.height}</Tag>

              <h4>Weight</h4>
              <Tag>{pokemon.weight}</Tag>

              <h4>Stats</h4>
              {pokemon.stats.map((stat, index) => (
                <div key={index}>
                  <p>
                    {stat.stat.name}
                    <Tag>{stat.base_stat}</Tag>
                  </p>
                </div>
              ))}
            </div>
          </Panel>
        </Col>
      </Row>
    </Grid>
  );
};

const mapStateToProps = state => ({
  pokemon: state.favorites.pokemon,
  favorites: state.favorites.favorites,
});

const mapDispatchToProps = dispatch => bindActionCreators(FavoritesActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Details);

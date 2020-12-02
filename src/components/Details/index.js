import React from 'react';
import { connect } from 'react-redux';
import { Panel, Grid, Row, Col, Tag } from 'rsuite';

import './styles.css'

const Details = ({ pokemon }) => {
  if (!pokemon.name || pokemon.name === '') return null;

  return (
    <Grid>
      <Row className="details__centered">
        <Col xs={12}>
          <Panel header="Details" bordered style={{ display: 'flex', flexDirection: 'column' }}>
            <img src={pokemon.sprites.front_default} />
            <h4>Name</h4>
            <Tag>{pokemon.name}</Tag>

            <h4>Abilities</h4>
            {pokemon.abilities.map(ability => (
              <>
                <Tag>{ability.ability.name}</Tag>
              </>
            ))}

            <h4>Height</h4>
            <Tag>{pokemon.height}</Tag>

            <h4>Weight</h4>
            <Tag>{pokemon.weight}</Tag>

            <h4>Stats</h4>
            {pokemon.stats.map(stat => (
              <>
                <p>
                  {stat.stat.name}
                  <Tag>{stat.base_stat}</Tag>
                </p>
              </>
            ))}
          </Panel>
        </Col>
      </Row>
    </Grid>
  );
};

const mapStateToProps = state => ({ pokemon: state.favorites.pokemon });

export default connect(mapStateToProps)(Details);

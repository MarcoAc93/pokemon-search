import React from 'react';
import { Grid, Row, Col, List, Tag, Button } from 'rsuite';
import { connect } from 'react-redux';
import * as Actions from '../../actions/pokemon';
import { bindActionCreators } from 'redux';

import './styles.css'

const Favorites = ({ favorites, removeFavorite }) => (
  <Grid>
    <Row className="search-bar__centered">
      <Col xs={12}>
        <List hover>
          {favorites.length > 0 && favorites.map((fav, index) => (
            <List.Item key={index}>
              <div className="favorites__center-space-between">
                <div>
                  <img src={fav.sprites.front_default} alt={fav.name} />
                  <Tag>{fav.name}</Tag>
                </div>
                <Button appearance="default" className="favorites__center-remove-button" onClick={() => removeFavorite(index)}>Remove</Button>
              </div>
            </List.Item>
          ))}
        </List>
      </Col>
    </Row>
  </Grid>
);

const mapStateToProps = state => ({ favorites: state.favorites.favorites });

const mapDispatchToProps = dispatch => bindActionCreators(Actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);

import React from 'react';
import { Grid, Row, Col, List } from 'rsuite';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

const Favorites = ({ favorites }) => (
  <Grid>
    {console.log(favorites)}
    <Row className="search-bar__centered">
      <Col xs={12}>
        <List hover>
          {favorites.length > 0 && favorites.map((fav, index) => (
            <List.Item key={index}>
              {fav.name}
            </List.Item>
          ))}
        </List>
      </Col>
    </Row>
  </Grid>
);

const mapStateToProps = state => ({ favorites: state.favorites.favorites });

export default connect(mapStateToProps)(Favorites);

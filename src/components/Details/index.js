import React from 'react';
import { connect } from 'react-redux';

const Details = () => {
  return (
    <div>Details!!!</div>
  );
};

const mapStateToProps = state => ({ pokemon: state.favorites.pokemon });

export default connect(mapStateToProps)(Details);

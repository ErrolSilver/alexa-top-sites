import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getSites } from '../actions/siteListingActions';
import Site from './Site';

const propTypes = {
  dataUrl: PropTypes.string,
  dispatch: PropTypes.func.isRequired,
  sites: PropTypes.arrayOf(PropTypes.string),
};

const defaultProps = {
  dataUrl: '/data/data-generated.json',
  sites: [],
};

const mapStateToProps = (state) => {
  return { 
    sites: state.listingReducers.sites,
  };
};

class SiteListing extends Component {
  componentWillMount() {
    this.props.dispatch(getSites(this.props.dataUrl));
  }
  render() {
    const { sites } = this.props;
    return (
      <div>
        <h1>test</h1>

        { sites.map((site) => {
          return <Site url={ site }/> 
        })}
      </div>
    );
  }
}

SiteListing.propTypes = propTypes;
SiteListing.defaultProps = defaultProps;


export default connect(mapStateToProps)(SiteListing);

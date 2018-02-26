import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { initializeGetSiteStatus } from '../actions/siteStatusActions';
import Site from '../components/Site';
import * as exampleResponse from '../../data/data.json';

const propTypes = {
  sites: PropTypes.arrayOf(PropTypes.string),
  initializeGetSiteStatus: PropTypes.func.isRequired,
  sitesStatuses: PropTypes.shape().isRequired,
};

const defaultProps = {
  sites: exampleResponse.sites,
};

const mapStateToProps = state => ({
  sitesStatuses: state.siteStatusReducers,
});

const mapDispatchToProps = {
  initializeGetSiteStatus,
};

class App extends Component {
  componentDidMount() {
    const { sites, initializeGetSiteStatus } = this.props;
    initializeGetSiteStatus(sites);
  }
  render() {
    const { sitesStatuses, sites } = this.props;
    return (
      <div>
        { sites.map(site => (
          <Site key={site} status={sitesStatuses[site]} url={site} />
        ))}
      </div>
    );
  }
}


App.propTypes = propTypes;
App.defaultProps = defaultProps;

export default connect(mapStateToProps, mapDispatchToProps)(App);

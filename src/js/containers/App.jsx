import chunk from 'lodash/chunk';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { initializeGetSiteStatus } from '../actions/siteStatusActions';
import Site from '../components/Site';
import * as exampleResponse from '../../data/data.json';

const propTypes = {
  sites: PropTypes.arrayOf(PropTypes.string),
  sitesStatuses: PropTypes.shape().isRequired,
  sitesInChunks: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
};

const defaultProps = {
  sites: exampleResponse.sites,
  sitesInChunks: chunk(exampleResponse.sites, 10),
};

const mapStateToProps = state => ({
  sitesStatuses: state.siteStatusReducers,
});

const mapDispatchToProps = {
  initializeGetSiteStatus,
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      activePage: 0,
      visibleSites: chunk(exampleResponse.sites, 10)[0],
    };
    this.showMore = this.showMore.bind(this);
  }
  componentDidMount() {
    const { sites } = this.props;
    initializeGetSiteStatus(sites);
  }
  showMore() {
    const nextPage = this.state.activePage + 1;
    const newSites = this.state.visibleSites.concat(this.props.sitesInChunks[nextPage]);

    if (nextPage <= this.props.sitesInChunks.length) {
      this.setState({
        activePage: nextPage,
        visibleSites: newSites,
      });
    }
  }
  render() {
    const { sitesStatuses } = this.props;
    const { visibleSites } = this.state;

    return (
      <div className="site-listing">
        { visibleSites.map(site => (
          <Site key={site} status={sitesStatuses[site]} url={site} />
        ))}

        <button onClick={this.showMore} className="show-more">Next Page</button>
      </div>
    );
  }
}


App.propTypes = propTypes;
App.defaultProps = defaultProps;

export default connect(mapStateToProps, mapDispatchToProps)(App);

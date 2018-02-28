import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getSiteStatus } from '../actions/siteStatusActions';

const propTypes = {
  url: PropTypes.string.isRequired,
  isPending: PropTypes.bool.isRequired,
  isFailure: PropTypes.bool.isRequired,
  isSuccess: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  getSiteStatus: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
  elapsedTime: PropTypes.string.isRequired,
  headers: PropTypes.objectOf(PropTypes.string).isRequired,
};

const mapStateToProps = () => ({
});

const mapDispatchToProps = {
  getSiteStatus,
};

class SiteStatus extends Component {
  componentDidMount() {
    this.props.getSiteStatus(this.props.url);
  }
  render() {
    const {
      isPending, isSuccess, isFailure, url, error, status, elapsedTime, headers,
    } = this.props;

    const headersString = Object.values(headers).toString();
    const hasStatus = status.length > 0;

    return (
      <div className="site-status">

        { !isPending ?
          <span>({ elapsedTime })</span>
        : null}

        { isPending ?
          <div className="site-status__column">
            <div className="site-status__spinner" />
          </div>
        : null}

        { hasStatus ?
          <div className="site-status__column">
            <span>Status: {status} </span>
            <div className="site-status__headers">
              <details>
                <summary>Header Summary</summary>

                <div className="site-status__headers-summary">
                  {headersString}
                </div>
              </details>
            </div>
          </div>
        : null }

        { isSuccess ?
          <div className="site-status__column">
            <a href={`http://${url}`}>Take me there</a>
          </div>
        : null}

        {
          isFailure ?
            <div className="site-status__column">
              <span>{error}</span>
              <svg className="site_status__failure-icon">
                <path d="M 10,10 L 30,30 M 30,10 L 10,30" />
              </svg>
            </div>
        : null }
      </div>
    );
  }
}

SiteStatus.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(SiteStatus);

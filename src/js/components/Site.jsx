import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SiteStatus from './SiteStatus';

const propTypes = {
  url: PropTypes.string.isRequired,
  status: PropTypes.shape({
    isPending: PropTypes.bool,
    isFailure: PropTypes.bool,
    isSuccess: PropTypes.bool,
    error: PropTypes.string,
  }),
};

const defaultProps = {
  status: {
    isPending: false,
    isFailure: false,
    isSuccess: false,
    error: '',
  },
};

class Site extends Component {
  componentDidMount() {
    // this.props.getSiteStatus(this.props.url);
  }
  render() {
    const {
      url, status,
    } = this.props;

    return (
      <div>
        <h1>{url}</h1>

        <SiteStatus
          url={url}
          isPending={status.isPending}
          isSuccess={status.isSuccess}
          isFailure={status.isFailure}
          error={status.error}
        />
      </div>
    );
  }
}

Site.propTypes = propTypes;
Site.defaultProps = defaultProps;

export default Site;

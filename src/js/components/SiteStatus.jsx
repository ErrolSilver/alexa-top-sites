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
};

const defaultProps = {

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
      isPending, isSuccess, isFailure,
    } = this.props;
    return (
      <div>
        { isPending ?
          'pending'
        : null}

        { isSuccess ?
          'success'
        : null}

        {
          isFailure ?
          'failure'
        : null }
      </div>
    );
  }
}


SiteStatus.propTypes = propTypes;
SiteStatus.defaultProps = defaultProps;

export default connect(mapStateToProps, mapDispatchToProps)(SiteStatus);

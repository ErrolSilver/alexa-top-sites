import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  isPending: PropTypes.bool.isRequired,
  isFailure: PropTypes.bool.isRequired,
  isSuccess: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
};

const SiteStatus = (props) => {
  const {
    isPending, isFailure, isSuccess, error,
  } = props;
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
        { error }
     : null }
    </div>
  );
};


SiteStatus.propTypes = propTypes;

export default SiteStatus;

import React from 'react';
import PropTypes from 'prop-types';
import SiteStatus from './SiteStatus';

const propTypes = {
  url: PropTypes.string.isRequired,
  status: PropTypes.shape({
    isPending: PropTypes.bool,
    isFailure: PropTypes.bool,
    isSuccess: PropTypes.bool,
    error: PropTypes.string,
    status: PropTypes.string,
  }),
};

const defaultProps = {
  status: {
    isPending: true,
    isFailure: false,
    isSuccess: false,
    error: '',
    status: '',
  },
};


const Site = (props) => {
  const {
    url, status,
  } = props;

  return (
    <section className="site">
      <h1 className="site__title">{url}</h1>

      <SiteStatus
        url={url}
        isPending={status.isPending}
        isSuccess={status.isSuccess}
        isFailure={status.isFailure}
        error={status.error}
        status={status.status}
      />
    </section>
  );
};


Site.propTypes = propTypes;
Site.defaultProps = defaultProps;

export default Site;

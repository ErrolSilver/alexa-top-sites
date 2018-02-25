import React from 'react';
import PropTypes from 'prop-types';


const propTypes = {
  url: PropTypes.string.isRequired,
};


const Site = (props) => {
  const { url } = props;
  return (
    <div>
      <h1>{url}</h1>
    </div>
  );
};


Site.propTypes = propTypes;


export default Site;

import React from 'react';
import Social from './Social';
import PropTypes from 'prop-types';

const Socials = ({ socials, displayType }) => (
    <div className={displayType}>
      socials.map(social => (
      <Social
          {...social}
          key={social.label}
      />
      ))
    </div>
);

Socials.defaultProps = {
  displayType: 'inline-block'
};

Socials.propTypes = {
  socials: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
  })).isRequired,
  displayType: PropTypes.string
};

export default Socials;
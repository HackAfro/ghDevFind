import React from 'react';
import PropTypes from 'prop-types';

import './Badge.css';
import { TEXT_COLOR } from '../helpers/helper';

const Badge = ({
  color, textColor, fontSize, icon, text, fontWeight, uppercase, ...others
}) => (
  <span
    className={`badge hint--bottom-right hint--bounce hint--rounded ${color}`}
    style={{
      fontSize: `${fontSize}px`,
      color: textColor,
      backgroundColor: `${color}`,
      fontWeight,
      textTransform: `${uppercase ? 'uppercase' : 'capitalize'}`,
    }}
    aria-label={text}
    {...others}
  >
    {icon}
    {text}
  </span>
);

Badge.propTypes = {
  color: PropTypes.string,
  textColor: PropTypes.string,
  fontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.node]),
  icon: PropTypes.node,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.node]),
  uppercase: PropTypes.bool,
  fontWeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.node]),
};

Badge.defaultProps = {
  color: 'black',
  textColor: TEXT_COLOR,
  fontSize: 22,
  icon: '',
  text: '',
  uppercase: true,
  fontWeight: 600,
};

export default Badge;

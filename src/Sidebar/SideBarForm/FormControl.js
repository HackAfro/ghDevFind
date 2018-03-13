import React from 'react';
import PropTypes from 'prop-types';

const FormControl = ({ header, label, children }) => (
  <div className="form-control">
    <p className="filter-subheader">{header}</p>
    {!!label && (
      <React.Fragment>
        <span className="toggle-label">{label.bool ? label.first : label.second}</span>
        <br />
      </React.Fragment>
    )}
    {children}
  </div>
);

FormControl.propTypes = {
  header: PropTypes.string,
  label: PropTypes.objectOf(PropTypes.any),
  children: PropTypes.node,
};

FormControl.defaultProps = {
  header: '',
  label: null,
  children: {},
};

export default FormControl;

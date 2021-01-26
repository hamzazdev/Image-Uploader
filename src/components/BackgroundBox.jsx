import React from 'react';
import propTypes from 'prop-types';

const BackgroundBox = ({ children }) => (
  <div className="w-402 px-8 py-10 bg-white rounded-md text-center shadow font-Poppins">
    {children}
  </div>
);

BackgroundBox.propTypes = {
  children: propTypes.element.isRequired,
};

export default BackgroundBox;

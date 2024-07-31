import React from 'react'
import PropTypes from 'prop-types';

const Nav = ({text, size, color}) => {
    const style = {
        fontSize: `${size}px`,
        color: color
    }
  return (
    <div style={style}>{text}</div>
  )
}


//show document in docs
Nav.propTypes = {
  
    /**
     * text show in Nav
     */
    text: PropTypes.string,
    /**
     *fontsize của text trong nav
     */
    size: PropTypes.number,
    /**
     * color text in nav
     */
    color: PropTypes.string,

  };
  
  Nav.defaultProps = {
    text: "text default",
    color: "black",
    size: 25

  };

export default Nav
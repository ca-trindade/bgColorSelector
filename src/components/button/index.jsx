import PropTypes from "prop-types";

export const Button = ({ color, handleClick }) => {
  return <button onClick={handleClick}>{color}</button>;
};

Button.propTypes = {
  color: PropTypes.string,
  handleClick: PropTypes.func,
};

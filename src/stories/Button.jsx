import React from "react";
import PropTypes, { any } from "prop-types";
import "./button.css";
import { Meta, Title, IconGallery, IconItem } from "@storybook/addon-docs/";
import { FaRocket } from "react-icons/fa";

/**
 * Primary UI component for user interaction
 */
export const Button = ({ backgroundColor, size, label, ...props }) => {
  const mode = "storybook-button--primary";
  return (
    <button
      type="button"
      className={["storybook-button", `storybook-button--${size}`, mode].join(
        " "
      )}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      <FaRocket />
      {label}
    </button>
  );
};

Button.propTypes = {
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: "medium",
  onClick: undefined,
};

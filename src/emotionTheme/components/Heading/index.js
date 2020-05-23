import React from "react";
import { Box } from "../Box";
import useHeadingStyles from "./styles";
import PropTypes from "prop-types";

const Heading = ({ as, children, ...props }) => {
  const headingStyleProps = useHeadingStyles({
    as,
  });
  return (
    <Box as={as} {...headingStyleProps} {...props}>
      {children}
    </Box>
  );
};

Heading.propTypes = {
  as: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6"]),
};

export {Heading};
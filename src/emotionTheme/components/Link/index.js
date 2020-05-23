import React, { forwardRef } from "react";
import { Box } from "../Box";

const baseStyleProps = {
  transition: `all 0.15s ease-out`,
  cursor: "pointer",
  outline: "none",
  textDecorationLine: "underline",
  "&:focus": {
    boxShadow: "outline",
  },
  "&:disabled": {
    opacity: "0.4",
    cursor: "not-allowed",
    textDecoration: "none",
  },
};

const Link = forwardRef((props, ref) => (
  <Box
    ref={ref}
    as="a"
    css={baseStyleProps}
    fontSize={"md"}
    fontWeight={"bold"}
    lineHeight={"base"}
    color={"secondary"}
    {...props}
  />
));

export { Link };
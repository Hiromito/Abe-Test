import React, { forwardRef } from "react";
import { Box } from "../Box";

const Paragraph = forwardRef((props, ref) => (
  <Box
    ref={ref}
    as="p"
    fontFamily="Barlow"
    fontSize={"md"}
    lineHeight={"base"}
    color={"secondary"}
    paddingBottom={"6"}
    {...props}
  />
));

export { Paragraph };
import React, { forwardRef } from "react";
import { Box } from "../Box";

const Svg = forwardRef(
  ({ size, color, viewBox, focusable, role, children, ...props }, ref) => {
    return (
      <Box
        as="svg"
        size={size}
        color={color}
        display="inline-block"
        verticalAlign="middle"
        viewBox={viewBox}
        focusable={focusable}
        role={role}
        ref={ref}
        css={{
          flexShrink: 0,
          backfaceVisibility: "hidden",
          "&:not(:root)": {
            overflow: "hidden",
          },
        }}
        {...props}
      >
        {children}
      </Box>
    );
  },
);

export { Svg };
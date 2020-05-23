import React, { forwardRef } from 'react';
import { Grid } from '../Grid';

const Container = forwardRef(({ children, ...props }, ref) => (
  <Grid
    ref={ref}
    gap={6}
    templateColumns={"repeat(12, 1fr)"}
    templateRows="auto"
    maxWidth="78rem"
    paddingLeft="6"
    paddingRight="6"
    mx="auto"
    {...props}
  >
    {children}
  </Grid>
));

Container.displayName = "Container";

export { Container };
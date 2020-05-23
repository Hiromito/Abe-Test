import styled from "@emotion/styled";
import {
  space,
  width,
  color,
  textAlign,
  lineHeight,
  fontWeight,
  letterSpacing,
  typography,
  compose,
} from "styled-system";

const Text = styled("span")(
  {
    fontSize: '1rem',
    color: "#000",
    fontFamily: "Barlow",
    fontStyle: "normal"
  },
  props => props.css,
  compose(
    space,
    width,
    color,
    textAlign,
    lineHeight,
    fontWeight,
    letterSpacing,
    typography
  )
);

Text.displayName = "Text";

export { Text };
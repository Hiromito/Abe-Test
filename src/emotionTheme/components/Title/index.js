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

const Title = styled("span")(
  {
    fontSize: '1rem',
    color: "#000",
    fontFamily: "Regular",
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

Title.displayName = "Title";

export { Title };
const headingByType = ({ as }) => {
  const style = {
    h1: {
      fontFamily: "Regular",
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: "5xl",
      lineHeight: "tallest",
    },
    h2: {
      fontFamily: "Regular",
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: "2lg",
      lineHeight: "taller",
    },
    h3: {
      fontFamily: "Regular",
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: "2xl",
      lineHeight: "base",
    },
    h4: {
      fontFamily: "Regular",
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: "xl",
      lineHeight: "base",
    },
    h5: {
      fontFamily: "Regular",
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: "xl",
      lineHeight: "none",
    },
    h6: {
      fontFamily: "Regular",
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: "lg",
      lineHeight: "none",
    }
  };
  return style[as];
};
const useHeadingStyles = ({ as }) => {
  return headingByType({ as });
};
export default useHeadingStyles;

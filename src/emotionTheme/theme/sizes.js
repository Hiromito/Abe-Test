export const baseSizes = {
  "0": "0",
  "1": "0.25rem",
  "2": "0.5rem",
  "3": "0.75rem",
  "4": "1rem",
  "5": "1.25rem",
  "6": "1.5rem",
  "8": "2rem",
  "10": "2.5rem",
  "11": "2.8125rem",
  "12": "3rem",
  "14": "3.5rem",
  "16": "4rem",
  "20": "5rem",
  "21": "5.125rem",
  "22": "5.5rem",
  "24": "6rem",
  "26": "6.25rem",
  "28": "6.5rem",
  "32": "8rem",
  "33": "8.125rem",
  "34": "9.625rem",
  "40": "10rem",
  "48": "12rem",
  "56": "14rem",
  "64": "16rem",
};

const largeSizes = {
  full: "100%",
  xs: "20rem",
  sm: "24rem",
  md: "28rem",
  lg: "32rem",
  xl: "36rem",
  "2xs": "21.75rem",
  "2lg": "34rem",
  "2xl": "42rem",
  "3xl": "48rem",
  "4xl": "56rem",
  "5xl": "64rem",
  "6xl": "72rem",
};

const containers = {
  md: "768px",
  lg: "1024px",
  xl: "1280px",
};

const sizes = {
  ...baseSizes,
  ...largeSizes,
  containers,
};

export default sizes;

export function getJustifyContent(aligment) {
  switch (aligment) {
    case "left":
      return "flex-start";
    case "right":
      return "flex-end";
    default:
      return "center";
  }
}

export function getAnimation(aligment) {
  switch (aligment) {
    case "left":
      return "fadeInLeft";
    case "right":
      return "fadeInRight";
    default:
      return "fadeInDown";
  }
}

export const breakpoints = {
  mobile: "768px",
  tablet: "1280px",
};

export const margin = {
  base: 1,
  unit: "rem",
};

export function getMargin(multiplyer) {
  return multiplyer * margin.base + margin.unit;
}

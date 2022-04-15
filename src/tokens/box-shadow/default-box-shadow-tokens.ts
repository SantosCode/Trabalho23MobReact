import {BoxShadowTokens} from "src/tokens/box-shadow/box-shadow-tokens";

const defaultColor = "rgba(0, 0, 0, 0.08)";

export const defaultBoxShadowTokens: BoxShadowTokens = {
  boxShadow: {
    "$shadow-level-1": {
      offsetY: "4px",
      offsetX: "0px",
      blur: "16px",
      color: defaultColor,
    },
    "$shadow-level-2": {
      offsetY: "8px",
      offsetX: "0px",
      blur: "24px",
      color: defaultColor,
    },
    "$shadow-level-3": {
      offsetY: "16px",
      offsetX: "0px",
      blur: "32px",
      color: defaultColor,
    },
    "$shadow-level-4": {
      offsetY: "16px",
      offsetX: "0px",
      blur: "48px",
      color: defaultColor,
    },
  },
};

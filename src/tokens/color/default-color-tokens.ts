import {ColorTokens} from "src/tokens/color/color-tokens";

export const defaultColorTokens: ColorTokens = {
  palette: {
    primary: {
      "$color-brand-primary-regular": "#a51848",
      "$color-brand-primary-darkest": "#a6316c",
      "$color-brand-primary-dark": "#0049B8",
      "$color-brand-primary-light": "#99C2FF",
      "$color-brand-primary-lightest": "#D6E7FF",
      "$color-brand-primary-gradient": ["#99C2FF", "#0049B8"],
    },
    secondary: {
      "$color-brand-secondary-regular": "#00EFEA",
      "$color-brand-secondary-darkest": "#008A87",
      "$color-brand-secondary-dark": "#00BDB9",
      "$color-brand-secondary-light": "#57FFFB",
      "$color-brand-secondary-lightest": "#BDFFFE",
      "$color-brand-secondary-gradient": ["#008A87", "#00BDB9"],
    },
    neutral: {
      "$color-neutral-darkest": "#181818",
      "$color-neutral-darker": "#666666",
      "$color-neutral-dark": "#999999",
      "$color-neutral-medium": "#CCCCCC",
      "$color-neutral-light": "#E1E1E1",
      "$color-neutral-lighter": "#F5F5F5",
      "$color-neutral-lightest": "#FFFFFF",
    },
    error: {
      "$color-feedback-error-darkest": "#811E18",
      "$color-feedback-error-dark": "#B71E15",
      "$color-feedback-error-medium": "#EA534A",
      "$color-feedback-error-light": "#EF7D76",
      "$color-feedback-error-lightest": "#F4A8A4",
    },
    success: {
      "$color-feedback-success-darkest": "#327B66",
      "$color-feedback-success-dark": "#419F85",
      "$color-feedback-success-medium": "#57BA9E",
      "$color-feedback-success-light": "#7DCAB4",
      "$color-feedback-success-lightest": "#A1D8C9",
    },
    warning: {
      "$color-feedback-attention-darkest": "#CB7A01",
      "$color-feedback-attention-dark": "#F1960E",
      "$color-feedback-attention-medium": "#F4AC40",
      "$color-feedback-attention-light": "#F7C06E",
      "$color-feedback-attention-lightest": "#FAD59E",
    },
    info: {
      "$color-feedback-info-darkest": "#1C607D",
      "$color-feedback-info-dark": "#2581A7",
      "$color-feedback-info-medium": "#43AAD5",
      "$color-feedback-info-light": "#6DBDDE",
      "$color-feedback-info-lightest": "#A3D6EB",
    },
  },
};

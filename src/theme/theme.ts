import {Fonts} from "src/fonts/fonts";

interface PrimaryBrand {
  /** $color-brand-primary-regular */
  regular: string;
  /** $color-brand-primary-darkest */
  darkest: string;
  /** $color-brand-primary-dark */
  dark: string;
  /** $color-brand-primary-light */
  light: string;
  /** $color-brand-primary-lightest */
  lightest: string;
}

interface SecondaryBrand {
  /** $color-brand-secondary-regular */
  regular: string;
  /** $color-brand-secondary-darkest */
  darkest: string;
  /** $color-brand-secondary-dark */
  dark: string;
  /** $color-brand-secondary-light */
  light: string;
  /** $color-brand-secondary-lightest */
  lightest: string;
}

interface Neutral {
  /** $color-neutral-darkest */
  darkest: string;
  /** $color-neutral-darker */
  darker: string;
  /** $color-neutral-dark */
  dark: string;
  /** $color-neutral-medium */
  medium: string;
  /** $color-neutral-light */
  light: string;
  /** $color-neutral-lighter */
  lighter: string;
  /** $color-neutral-lightest */
  lightest: string;
}

interface Feedback {
  /** $color-feedback-darkest */
  darkest: string;
  /** $color-feedback-dark */
  dark: string;
  /** $color-feedback-medium */
  medium: string;
  /** $color-feedback-light */
  light: string;
  /** $color-feedback-lightest */
  lightest: string;
}

interface SpacingSquish {
  vertical: string;
  horizontal: string;
}

export interface BoxShadow {
  offsetY: string;
  offsetX: string;
  blur: string;
  color: string;
}

export interface Theme {
  palette: {
    primary: PrimaryBrand;
    secondary: SecondaryBrand;
    neutral: Neutral;
    error: Feedback;
    success: Feedback;
    warning: Feedback;
    info: Feedback;
  };
  opacity: {
    levels: {
      /** $opacity-level-semiopaque */
      semiOpaque: number;
      /** $opacity-level-medium */
      medium: number;
      /** $opacity-level-light */
      light: number;
      /** $opacity-level-lighter */
      lighter: number;
      /** $opacity-level-semitransparent */
      semiTransparent: number;
      /** $opacity-level-transparent */
      transparent: number;
    };
  };
  typography: {
    lineHeight: {
      /** $line-height-tight */
      tight: string;
      /** $line-height-medium */
      medium: string;
      /** $line-height-loose */
      loose: string;
      /** $line-height-veryloose */
      xLoose: string;
    };
    fontSize: {
      /** $font-size-xxs */
      xxs: string;
      /** $font-size-xs */
      xs: string;
      /** $font-size-s */
      s: string;
      /** $font-size-m */
      m: string;
      /** $font-size-l */
      l: string;
      /** $font-size-xl */
      xl: string;
      /** $font-size-xxl */
      xxl: string;
      /** $font-size-xxxl */
      xxxl: string;
    };
    fontStyle: {
      /** $font-style-italic */
      italic: string;
    };
    textDecoration: {
      /** $text-decoration-underline */
      underline: string;
    };
    fontWeight: {
      /** $font-weight-regular */
      light: number;
      /** $font-weight-bold */
      regular: number;
      /** $font-weight-light */
      medium: number;
      /** $font-weight-medium */
      bold: number;
    };
    fonts: Fonts;
  };
  shape: {
    borderRadius: {
      /** $border-radius-none */
      none: string;
      /** $border-radius-xs */
      xs: string;
      /** $border-radius-s */
      s: string;
      /** $border-radius-m */
      m: string;
      /** $border-radius-l */
      l: string;
      /** $border-radius-pill */
      pill: string;
      /** $border-radius-circular */
      circular: string;
    };
    borderWidth: {
      /** $border-width-none */
      none: string;
      /** $border-width-hairline */
      xs: string;
      /** $border-width-thin */
      s: string;
      /** $border-width-thick */
      m: string;
      /** $border-width-heavy */
      l: string;
    };
    boxShadow: {
      level1: BoxShadow;
      level2: BoxShadow;
      level3: BoxShadow;
      level4: BoxShadow;
    };
  };
  spacing: {
    spacingHorizontal: {
      /** $spacing-horizontal-quark */
      xxxxxs: string;
      /** $spacing-horizontal-nano */
      xxxxs: string;
      /** $spacing-horizontal-xxxs */
      xxxs: string;
      /** $spacing-horizontal-xxs */
      xxs: string;
      /** $spacing-horizontal-xs */
      xs: string;
      /** $spacing-horizontal-s */
      s: string;
      /** $spacing-horizontal-m */
      m: string;
      /** $spacing-horizontal-l */
      l: string;
      /** $spacing-horizontal-xl */
      xl: string;
    };
    spacingVertical: {
      /** $spacing-vertical-quark */
      xxxxxs: string;
      /** $spacing-vertical-nano */
      xxxxs: string;
      /** $spacing-vertical-xxxs */
      xxxs: string;
      /** $spacing-vertical-xxs */
      xxs: string;
      /** $spacing-vertical-xs */
      xs: string;
      /** $spacing-vertical-s */
      s: string;
      /** $spacing-vertical-m */
      m: string;
      /** $spacing-vertical-l */
      l: string;
      /** $spacing-vertical-xl */
      xl: string;
      /** $spacing-vertical-xxl */
      xxl: string;
      /** $spacing-vertical-xxxl */
      xxxl: string;
      /** $spacing-vertical-huge */
      xxxxl: string;
      /** $spacing-vertical-giant */
      xxxxxl: string;
    };
    spacingSquish: {
      /** $spacing-squish-quark */
      xxxs: SpacingSquish;
      /** $spacing-squish-nano */
      xxs: SpacingSquish;
      /** $spacing-squish-xs */
      xs: SpacingSquish;
      /** $spacing-squish-s */
      s: SpacingSquish;
    };
    spacingInset: {
      /** $spacing-inset-quark */
      xxxs: string;
      /** $spacing-inset-nano */
      xxs: string;
      /** $spacing-inset-xs */
      xs: string;
      /** $spacing-inset-s */
      s: string;
      /** $spacing-inset-m */
      m: string;
      /** $spacing-inset-l */
      l: string;
    };
  };
  dimensions: {
    sizes: {
      /** $size-quark */
      xxxxxs: string;
      /** $size-nano */
      xxxxs: string;
      /** $size-xxxs */
      xxxs: string;
      /** $size-xxs */
      xxs: string;
      /** $size-xs */
      xs: string;
      /** $size-s */
      s: string;
      /** $size-m */
      m: string;
      /** $size-l */
      l: string;
      /** $size-xl */
      xl: string;
      /** $size-xxl */
      xxl: string;
      /** $size-xxxl */
      xxxl: string;
      /** $size-huge */
      xxxxl: string;
      /** $size-giant */
      xxxxxl: string;
    };
  };
}
